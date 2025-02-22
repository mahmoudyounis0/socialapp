import Image from "next/image";
import styles from "./page.module.css";
import linkupPhoto from "../../public/images/logo-white.svg";
import Link from "next/link";
import logo from "../../public/images/logo-white.svg";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
        <Link className="navbar-brand text-center w-100 mt-2" href="/">
              <Image src={logo} alt="logo" width={130} />
            </Link>
      <div className={styles.hero}>
        <h1>
          Welcome to <Image src={linkupPhoto} alt="linkup photo" width={100} />{" "}
          – Where Connections Happen!
        </h1>
        <p>
          Join the ultimate social platform to connect, share, and engage with
          your community. Stay updated with trending topics, real-time chats,
          and meaningful interactions.
        </p>
        <div>
          <Link href={"/signup"}>
            <button className={styles.btnPrimary}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
