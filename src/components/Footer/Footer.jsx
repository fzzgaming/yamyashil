import { Link as ScrollLink } from 'react-scroll'
import { LanguageContext } from '../../context/LanguageContext'
import { HiOutlineLocationMarker,HiOutlineMail } from "react-icons/hi";
import { useContext } from 'react'
import './Footer.scss'
const Footer = () => {
    const { t } = useContext(LanguageContext)
    return (
        <div className="container">
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <img src="/icons/logo.png" alt="" />
                            <div className="logo-text">
                                <h2>Yam-Yashil</h2>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="icon"><HiOutlineLocationMarker/></span>
                                <p>{t("city")}</p>
                            </div>
                            <div className="contact-item">
                                <span className="icon"><HiOutlineMail/></span>
                                <p>feruzofficial@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3>{t('footerQuickLinks')}</h3>
                        <ul>
                            <li><ScrollLink smooth={true} duration={800} to="courses">{t('coursesTitle')}</ScrollLink></li>
                            <li><ScrollLink smooth={true} duration={800} to="about">{t('aboutTitle')}</ScrollLink></li>
                            <li><ScrollLink smooth={true} duration={800} to="testimonials">{t('testimonialsTitle')}</ScrollLink></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>{t("media")}</h3>
                        <ul>
                            <li><a href="#instagram">{t("instagram")}</a></li>
                            <li><a href="#telegram">{t("telegram")}</a></li>
                            <li><a href="#youtube">{t("youtube")}</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Yam-Yashil</h3>
                        <ul>
                            <li><a href="#privacy">{t("privacy")}</a></li>
                            <li><a href="#terms">{t("terms")}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Feruz © 2022-2026</p>
                    <p>{t("reserved")}</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer