import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import Aos from 'aos'
import './Courses.scss'
import 'aos/dist/aos.css'
function Courses() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    const { t } = useContext(LanguageContext)
    return (
        <section id="courses" className="courses">
            <h2 data-aos="fade-right">{t('goal')}</h2>
            <div className="courses-grid">
                <h3 data-aos="fade-up">{t('goalDesc')}</h3>
            </div>
        </section>
    )
}
export default Courses