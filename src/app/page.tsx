import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/organisms/home-page/home-page";
import Navigation from "@/components/organisms/navigation/navigation";
import CheckoutContextProvider, { spotlightContextInitialState } from "@/components/molecules/spotlight/spotlight-context";

export default function Home() {
  return (
    <main className={styles.main}>
      <CheckoutContextProvider initialState={spotlightContextInitialState}>
        <Navigation />
        <Homepage />
      </CheckoutContextProvider>
    </main>
  );
}
