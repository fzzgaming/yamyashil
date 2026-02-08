import Aos from 'aos'
import { useContext, useEffect } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import 'aos/dist/aos.css'
import "./Stats.scss"
function Stats() {
    useEffect(() => {
        Aos.init({
            duration:1000
        })
    },[])
    const {t} = useContext(LanguageContext)
    return <>
        <div className="stats">
            <h2>{t("competition")}</h2>
            <img data-aos="flip-up" src="/img/competitors.png" alt="" />
        </div>
    </>
}
export default Stats