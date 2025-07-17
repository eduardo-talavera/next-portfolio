
import HomeLayout from "@/components/core/HomeLayout";
import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <main>
         <HomeLayout>
          <section style={{ position: 'relative' }}>
            <div className="wave-about"></div>
            <AboutMe />
          </section>
          <section style={{ position: 'relative' }}>
            <div className="wave"></div>
            <Portfolio />
          </section>
        </HomeLayout>
     </main>
    </div>
  );
}
