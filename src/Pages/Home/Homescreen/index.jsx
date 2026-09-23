import HeroSection from "../HeroSection"
import MySkills from "../MySkills"
import MyPortfolio from "../MyPortfolio"
import Experience from "../Experience"
import AboutMe from "../AboutMe"
import ContactMe from "../ContactMe"
import Footer from "../Footer"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <MySkills />
        <MyPortfolio />
        <Experience />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}
