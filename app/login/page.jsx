import { socialLogin } from "../actions";
import { Chrome } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="container mx-auto min-h-screen p-36">
      <div className="flex justify-center items-center">
        <form action={socialLogin}>
          <button
            type="submit"
            name="action"
            value="goolge"
            className="btn btn-warning flex gap-2"
          >
            <Chrome className="w-4 h-4" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
