import { LanguageProvider } from "../context/LanguageContext"
import { useEffect } from "react"
import Courses from "../components/Courses/Courses"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Testimonials from "../components/Testimonials/Testimonials"
import Footer from "../components/Footer/Footer"
import Work from "../components/Work/Work"
import Features from "../components/Features/Features"
import Statistics from "../components/Statistics/Statistics"
import QuizSection from "../components/QuizSection/QuizSection"
import Apps from "../components/Apps/Apps"
import Stats from "../components/Stats/Stats"
import MyAbout from "../components/MyAbout/MyAbout"
function Home() {
    useEffect(() => {
        document.title = "Bosh sahifa"
    },[])
    return <>
        <LanguageProvider>
            <Header />
            <Hero />
            <Work/>
            <MyAbout/>
            <Features/>
            <Courses />
            <Testimonials />
            <Stats/>
            <Statistics/>
            <QuizSection/>
            <Apps/>
            <Footer/>
        </LanguageProvider>
    </>
}
export default Home