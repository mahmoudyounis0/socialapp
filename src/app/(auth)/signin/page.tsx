import React from "react";
import styles from "./signin.module.css";
import FormSignIn from "@/app/_components/Signforms/Signin";

export default function SignIn() {
  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinBox}>
        <h2>Sign In</h2>
        <p>Welcome back! Enter your credentials to access your account.</p>

        <FormSignIn />
      </div>
    </div>
  );
}
