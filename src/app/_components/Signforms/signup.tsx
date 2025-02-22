"use client";
import * as yup from "yup";
import Link from "next/link";
import React from "react";
import styles from "../../(auth)/signup/signup.module.css";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function FromSignUp() {
  const router = useRouter();
  interface SignupData {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    dateOfBirth: string;
    gender: string;
  }
  const signupdata: SignupData = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    dateOfBirth: "",
    gender: "",
  };
  const SignupSchema = yup.object({
    name: yup.string().required("Name is required"),
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

    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    dateOfBirth: yup
      .date()
      .typeError("Invalid date format")
      .required("Date of birth is required"),
    gender: yup.string().required("Gender is required"),
  });

  const handleSignup = async (values: SignupData) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/signup`,values)
      toast.success(res?.data?.message, {
        duration: 3000,
        position: "top-center",
      });
      router.push("/signin")
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data.error, {
        duration: 3000,
        position: "top-center",
      });
      
    }
  };
  const myFormik = useFormik({
    initialValues: signupdata,
    validationSchema: SignupSchema,
    onSubmit: handleSignup,
  });

  return (
    <>
    <Toaster />
      <form onSubmit={myFormik.handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className={styles.signupInput}
          required
          onChange={myFormik.handleChange}
          value={myFormik.values.name}
          onBlur={myFormik.handleBlur}
          id="name"
        />
        {myFormik.touched.name && myFormik.errors.name ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {myFormik.errors.name}
          </div>
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="Email Address"
          className={styles.signupInput}
          required
          onChange={myFormik.handleChange}
          value={myFormik.values.email}
          onBlur={myFormik.handleBlur}
          id="email"
        />
        {myFormik.touched.email && myFormik.errors.email ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {myFormik.errors.email}
          </div>
        ) : (
          ""
        )}
        <input
          type="password"
          placeholder="Password"
          className={styles.signupInput}
          required
          onChange={myFormik.handleChange}
          value={myFormik.values.password}
          onBlur={myFormik.handleBlur}
          id="password"
        />
        {myFormik.touched.password && myFormik.errors.password ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {myFormik.errors.password}
          </div>
        ) : (
          ""
        )}
        <input
          type="password"
          name="rePassword"
          placeholder="Confirm Password"
          className={styles.signupInput}
          onChange={myFormik.handleChange}
          value={myFormik.values.rePassword}
          onBlur={myFormik.handleBlur}
          id="rePassword"
        />
        {myFormik.touched.rePassword && myFormik.errors.rePassword ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {myFormik.errors.rePassword}
          </div>
        ) : (
          ""
        )}
        <input
          type="date"
          name="dateOfBirth"
          className={styles.signupInput}
          onChange={myFormik.handleChange}
          value={myFormik.values.dateOfBirth}
          onBlur={myFormik.handleBlur}
          id="dateOfBirth"
        />
        {myFormik.touched.dateOfBirth && myFormik.errors.dateOfBirth ? (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {myFormik.errors.dateOfBirth}
          </div>
        ) : (
          ""
        )}
        <div className={styles.radioGroup}>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={myFormik.values.gender === "male"}
              onChange={myFormik.handleChange}
              onBlur={myFormik.handleBlur}
            />
            Male
          </label>

          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={myFormik.values.gender === "female"}
              onChange={myFormik.handleChange}
              onBlur={myFormik.handleBlur}
            />
            Female
          </label>
        </div>

        {myFormik.touched.gender && myFormik.errors.gender && (
          <div className="p-2 mb-2 rounded-2 bg-danger text-white fw-semibold">
            {myFormik.errors.gender}
          </div>
        )}

        <button
          type="submit"
          className={styles.signupButton}
          disabled={myFormik.isSubmitting}
        >
          {myFormik.isSubmitting ? "lOADING..." : "Create Account"}
        </button>
      </form>

      <Link href="/signin" className={styles.signupLink}>
        Already have an account? Log in
      </Link>
    </>
  );
}
