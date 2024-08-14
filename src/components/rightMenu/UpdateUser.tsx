"use client";

import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState } from "react";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import UpdateButton from "./UpdateButton";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(null);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            }
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            {/* Title */}
            <h1 className="text-lg font-bold">Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </div>

            {/* Cover picture upload */}
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => {
                setCover(result.info);
              }}
            >
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-4 my-4">
                    <label className="text-xs text-gray-500">
                      Cover Picture
                    </label>
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => open()}
                    >
                      <Image
                        src={cover?.secure_url || user.cover || "/noCover.png"}
                        alt="Cover Picture"
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <div className="text-xs underline text-gray-600">
                        Upload New Cover
                      </div>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* Form fields */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {[
                {
                  label: "First Name",
                  name: "name",
                  placeholder: user.name || "Jon",
                },
                {
                  label: "SurName",
                  name: "surname",
                  placeholder: user.surname || "Don",
                },
                {
                  label: "Description",
                  name: "description",
                  placeholder: user.description || "AHHAHA",
                },
                {
                  label: "City",
                  name: "city",
                  placeholder: user.city || "Rom",
                },
                {
                  label: "School",
                  name: "school",
                  placeholder: user.school || "PTU",
                },
                {
                  label: "Work",
                  name: "work",
                  placeholder: user.work || "Apple Inc",
                },
                {
                  label: "Website",
                  name: "website",
                  placeholder: user.website || "https://youtube.com",
                },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-4 w-full">
                  <label className="text-xs text-gray-500">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                    name={field.name}
                  />
                </div>
              ))}
            </div>

            <UpdateButton />
            {state.success && (
              <span className="text-green-500">Profile has been updated</span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong</span>
            )}
            <div
              className="absolute text-xl right-2 top-3 cursor-pointer"
              onClick={handleClose}
            >
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
