import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

export default async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      // <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
      <Image
        src={profileImage}
        alt="profile"
        width={28}
        height={28}
        className="rounded-full object-cover"
      />
    );
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
