import { getLayout } from "@/components/layouts/AuthLayout";
import { NextPageWithLayout } from "../_app";

const SignupSuccess: NextPageWithLayout = () => {
  return <p>Great Success</p>;
};

SignupSuccess.getLayout = getLayout;

export default SignupSuccess;
