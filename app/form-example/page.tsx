"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/validations/signup";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
  });

  const submitForm = (data: object) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-1/4"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email Address</label>
          <input
            {...register("email")}
            type="text"
            placeholder="Email Address"
            className="border px-2 py-1 rounded-md"
          />
          {errors.email ? (
            <span className="text-sm self-end">{errors.email.message}.</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Username</label>
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="border px-2 py-1 rounded-md"
          />
          {errors.username ? (
            <span className="text-sm self-end">{errors.username.message}.</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Age</label>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            placeholder="Age"
            className="border px-2 py-1 rounded-md"
          />
          {errors.age ? (
            <span className="text-sm self-end">{errors.age.message}.</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="border px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="border px-2 py-1 rounded-md"
            // onPaste={add some logic here}
          />
          {errors.confirmPassword ? (
            <span className="text-sm self-end">
              {errors.confirmPassword.message}.
            </span>
          ) : (
            ""
          )}
        </div>
        <input
          type="submit"
          value="Create Account"
          className="px-2 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500 transition"
        />
      </form>
    </div>
  );
}

export default Page;
