"use client";
import React from "react";
import styles from "../../(auth)/signin/signin.module.css";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function FormSignIn() {
  const router = useRouter();
  interface SignInData {
    email: string;
    password: string;
  }
  const signINData: SignInData = {
    email: "",
    password: "",
  };
  const handleLoginSubmit = async (values: SignInData) => {
    console.log(values);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/signin`,
        values
      );
      toast.success(res.data.message, {
        duration: 3000,
        position: "top-center",
      });
      document.cookie = `authToken=${res.data.token}; path=/; max-age=86400; secure; samesite=strict`;
      router.push("social/home");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data.error, {
        duration: 3000,
        position: "top-center",
      });
    }
  };
  const Schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .matches(/^[A-Z]/, "Password must start with a capital letter")
      .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@$!%*?&)"
      )
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });
  const SignInFormik = useFormik({
    initialValues: signINData,
    validationSchema: Schema,
    onSubmit: handleLoginSubmit,
  });
  return (
    <>
      <Toaster />
      <form onSubmit={SignInFormik.handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className={styles.signinInput}
          required
          id="email"
          onChange={SignInFormik.handleChange}
          value={SignInFormik.values.email}
          onBlur={SignInFormik.handleBlur}
        />
        {SignInFormik.errors.email && SignInFormik.touched.email ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {SignInFormik.errors.email}
          </div>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          className={styles.signinInput}
          required
          id="password"
          onChange={SignInFormik.handleChange}
          onBlur={SignInFormik.handleBlur}
          value={SignInFormik.values.password}
        />
        {SignInFormik.errors.password && SignInFormik.touched.password ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {SignInFormik.errors.password}
          </div>
        ) : null}
        <button
          type="submit"
          className={styles.signinButton}
          disabled={SignInFormik.isSubmitting}
        >
          {SignInFormik.isSubmitting ? "LOADING..." : "Sign In"}
        </button>
      </form>

      <Link href="/signup" className={styles.signinLink}>
        Don&apos;t have an account? Sign up
      </Link>
    </>
  );
}
