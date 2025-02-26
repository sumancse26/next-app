import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import Logout from "../components/Logout";

const HomePage = async () => {
  const session = await auth();
  console.log("session", session);
  if (!session?.user) redirect("/");
  return (
    <div className="flex flex-col items-center m-4">
      <Image
        src={session?.user.image}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1>{session.user.name}</h1>
      <h5>{session.user.email}</h5>
      <Logout />
    </div>
  );
};

export default HomePage;
