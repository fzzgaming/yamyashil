import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import Aos from 'aos'
import './Hero.scss'
import 'aos/dist/aos.css'
function Hero (){
    useEffect(() => {
        Aos.init({
            duration:1000
        })
    }, [])
    const { t } = useContext(LanguageContext)
    return (
        <section className="hero">
            <div className="hero-content">
                <h1><span>Yam-Yashil</span> - {t('heroTitle')}</h1>
                <p>{t('heroSubtitle')}</p>
                <button className="btn" data-aos="flip-left">{t('heroBtn')}</button>
            </div>
        </section>
    )
}
export default Hero