import React from "react";
import styles from "./signup.module.css";
import FromSignUp from "@/app/_components/Signforms/signup";

export default function SignUp() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2>Sign Up</h2>
        <p>Connect, share, and engage with your community.</p>

        <FromSignUp />
      </div>
    </div>
  );
}
