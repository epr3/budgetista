import { RegisterForm } from "@/components/organisms/RegisterForm";
import { NextPageWithLayout } from "../_app";
import { getLayout } from "@/components/layouts/AuthLayout";

const Signup: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-12 h-full lg:gap-72 lg:w-1/2 lg:pr-12">
      <h1 className="text-accent2 font-bold text-5xl uppercase">Sign Up</h1>

      <RegisterForm />
    </div>
  );
};

Signup.getLayout = getLayout;

export default Signup;
