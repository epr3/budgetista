import { RegisterForm } from "@/components/organisms/RegisterForm";

export default function Signup() {
  return (
    <div className="flex flex-col gap-12 h-full lg:gap-72 lg:w-1/2 lg:pr-12">
      <h1 className="text-accent2 font-bold text-5xl uppercase">Sign Up</h1>

      <RegisterForm />
    </div>
  );
}
