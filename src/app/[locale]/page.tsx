
import HomeLayout from "@/components/core/HomeLayout";
import AboutMe from "@/components/about/AboutMe";
//import Portfolio from "@/components/portfolio/Portfolio";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

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
            <PortfolioGrid />
          </section>
        </HomeLayout>
     </main>
    </div>
  );
}
