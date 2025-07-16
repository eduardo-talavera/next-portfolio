import styles from "./page.module.css";
import HomeLayout from "@/components/core/HomeLayout";
import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <main>
         <HomeLayout>
          <section className="wabe_head">
            <AboutMe />
          </section>
          <section className="wabe">
            <Portfolio />
          </section>
        </HomeLayout>
     </main>
    </div>
  );
}
