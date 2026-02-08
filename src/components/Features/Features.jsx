import { featureList } from '../../utils/constants'
import { useEffect,useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Features.scss'
function Features() {
    const { t } = useContext(LanguageContext)
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <section className="features-section">
            <div className="badge"  data-aos="fade-right">{t("advantages")}</div>
            <h2 className="main-title" data-aos="fade-right">{t("discovers")}</h2>
            <p className="sub-title" data-aos="fade-right">
                {t("descriptionText")}
            </p>
            <div className="features-grid">
                {featureList.map(item => (
                    <div key={item.id} className="feature-card" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="icon-wrapper"><img src={item.icon} alt="" /></div>
                        <h3>{t(item.title)}</h3>
                        <p>{t(item.desc)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Features