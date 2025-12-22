import { signInAction } from "@/_lib/actions";
import Image from "next/image";

function SignInButton() {
    return (
        <form
            action={signInAction}
            className="w-full flex justify-center items-center"
        >
            <button className="w-full flex justify-center items-center gap-6 text-md border border-white px-3 py-4 font-medium text-white cursor-pointer hover:bg-teal-600/30 transition-colors duration-300">
                <Image
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    height="24"
                    width="24"
                />
                <span>Continue with Google</span>
            </button>
        </form>
    );
}

export default SignInButton;
