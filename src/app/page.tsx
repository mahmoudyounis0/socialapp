import Image from "next/image";
import styles from "./page.module.css";
import linkupPhoto from "../../public/images/logo-white.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.mainContainer}>
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
