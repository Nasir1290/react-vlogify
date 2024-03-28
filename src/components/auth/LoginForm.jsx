import React from "react";
import Field from "../../common/Field";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onLogin = (formData) => {
    console.log(formData);
    navigate("/home")
  };

  return (
    <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-l from-cyan-400 to-white text-transparent bg-clip-text">
        Login Page
      </h2>
      <form action="" onSubmit={handleSubmit(onLogin)}>
        <Field label={"Email"} error={errors.email}>
          <input
            {...register("email", { required: "Email is Required" })}
            type="email"
            id="email"
            name="email"
            className={`w-full p-3 bg-[#030317] border border-${
              errors.password ? "red-500" : "white/20"
            } rounded-md focus:outline-none `}
          />
        </Field>

        <Field label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "password must be atleast 8 character's logn",
              },
            })}
            type="password"
            id="password"
            name="password"
            className={`w-full p-3 bg-[#030317] border border-${
              errors.password ? "red-500" : "white/20"
            }  rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>

        <Field>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </button>
        </Field>

        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
