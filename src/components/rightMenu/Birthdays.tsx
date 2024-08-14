import Image from "next/image";
import Link from "next/link";

const Birthday = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthday</span>
      </div>
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26976590/pexels-photo-26976590.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="User profile picture"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayn Butro</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>

      {/**Upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image
          src="/gift.png"
          alt="User profile picture"
          width={40}
          height={40}
        />
        <Link href={"/"} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birshtdays
          </span>
          <span className="text-gray-500">See Other</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthday;
