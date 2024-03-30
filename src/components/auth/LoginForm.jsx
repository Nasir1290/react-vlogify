import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onLogin = async (formData) => {
    // Make an API call
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { user, token } = response.data;
        const authToken = token.accessToken;
        const refreshToken = token.refreshToken;
        setAuth({ user, authToken, refreshToken });
        navigate("/");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `Invalid Credentials, email:${formData.email} , password:${formData.password}`,
      });
    }
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
              errors.email ? "red-500" : "white/20"
            } rounded-md focus:outline-none `}
          />
        </Field>

        <Field label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "password must be atleast 8 character's long",
              },
            })}
            type="password"
            id="password"
            name="password"
            className={`w-full p-3 bg-[#030317] border border-${
              errors.password ? "red-500" : "border-white/20"
            }  rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>

        {errors?.root?.random?.message && (
          <p className=" bg-red-200 text-red-500 p-1 rounded-lg text-center font-semibold mb-1">
            {errors?.root?.random?.message}
          </p>
        )}

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
