import React from 'react'
import styles from "../../(auth)/signin/signin.module.css"
import Link from 'next/link'
export default function FormSignIn() {
  return <>
      <form>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.signinInput}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.signinInput}
              required
            />
            <button type="submit" className={styles.signinButton}>
              Sign In
            </button>
          </form>
  
          <Link href="/signup" className={styles.signinLink}>
            Don&apos;t have an account? Sign up
          </Link>
  </>
}
