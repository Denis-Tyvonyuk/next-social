import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[calc(100vh-96px)] flex item-center justify-center">
      <SignUp />
    </div>
  );
}
