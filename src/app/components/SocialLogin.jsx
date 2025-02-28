import { doSocialLogin } from "../actions/index";
const SocialLoginForm = () => {
  return (
    <form
      className="flex flex-col gap-4 items-center pt-3"
      action={doSocialLogin}
    >
      <div className="flex gap-4">
        <button
          type="submit"
          name="action"
          value="google"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Login with google
        </button>
        <button
          type="submit"
          name="action"
          value="github"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Login with github
        </button>
      </div>
    </form>
  );
};

export default SocialLoginForm;
