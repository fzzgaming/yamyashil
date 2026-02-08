import { useEffect,useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Apps.scss'
function Apps() {
    const { t } = useContext(LanguageContext)
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <section className="feruz-app-banner">
            <div className="banner-container">
                <div className="content-side">
                    <h1 className="main-title">{t("feruzTitle")}</h1>
                    <p className="sub-description">
                        {t("downloadNow")}
                    </p>
                    <div className="download-buttons">
                        <a href="#" className="store-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                        </a>
                        <a href="#" className="store-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                        </a>
                    </div>
                </div>
                <div className="phones-side">
                    <div className="phone light-mode" data-aos="flip-right">
                        <div className="phone-inner">
                            <div className="phone-screen">
                                <div className="screen-header">
                                    <img src="/icons/logo.png" alt="" />
                                    <span>Salom, Iskandar</span>
                                </div>
                                <div className="course-card">
                                    <p>Barcha kurslar</p>
                                    <div className="lang-box">
                                        <strong>Ingliz tili</strong>
                                        <span>Rustam Qoriyev</span>
                                    </div>
                                    <div className="lang-box">
                                        <strong>Italyan tili</strong>
                                        <span>Bahora Ergashova</span>
                                    </div>
                                    <div className="lang-box">
                                        <strong>Hind tili</strong>
                                        <span>Kamola Rahmatjonova</span>
                                    </div>
                                    <div className="lang-box">
                                        <strong>IELTS darslari</strong>
                                        <span>Iskandar Komoldinov</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="phone dark-mode"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1200">
                        <div className="phone-inner">
                            <div className="phone-screen">
                                <div className="screen-header">
                                    <div className="link-bar">
                                        <div className="link">
                                            yam-yashil.uz
                                            <img src="/icons/search-icon.png" alt="" />
                                        </div>
                                        <span>Salom, Iskandar</span>
                                    </div>
                                </div>
                                <div className="course-card">
                                    <p>Barcha kurslar</p>
                                    <div className="lang-box">
                                        <strong>Ingliz tili</strong>
                                        <span>Rustam Qoriyev</span>
                                    </div>
                                    <div className="lang-box">
                                        <strong>Italyan tili</strong>
                                        <span>Bahora Ergashova</span>
                                    </div>
                                    <div className="lang-box">
                                        <strong>Hind tili</strong>
                                        <span>Kamola Rahmatjonova</span>
                                    </div>
                                    <div className="lang-box">
                                        <strong>IELTS darslari</strong>
                                        <span>Iskandar Komoldinov</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Apps