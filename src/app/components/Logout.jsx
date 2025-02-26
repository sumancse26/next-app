import { doLogout } from "../actions";

const Logout = () => {
  return (
    <form className="flex flex-col gap-4 items-center pt-3 " action={doLogout}>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
