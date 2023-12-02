import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/organisms/home-page/home-page";
import Navigation from "@/components/organisms/navigation/navigation";
import TutorialContextProvider, { tutorialContextInitialState } from "@/components/utilities/tutorial-context/tutorial-context";

export default function Home() {
  return (
    <main className={styles.main}>
      <TutorialContextProvider initialState={tutorialContextInitialState}>
        <Navigation />
        <Homepage />
      </TutorialContextProvider>
    </main>
  );
}
