import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import Logout from "../components/Logout";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");

  return session.user?.image && session?.user.name ? (
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
  ) : (
    <div className="flex flex-col items-center m-4">
      <h5>Welcome, {session.user.email}</h5>
      <Logout />
    </div>
  );
};

export default HomePage;
