import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/organisms/home-page/home-page";
import Navigation from "@/components/organisms/navigation/navigation";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Homepage />
    </main>
  );
}
