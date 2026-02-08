import { statsData } from '../../utils/constants'
import { useEffect, useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Statistics.scss'
const Statistics = () => {
    const { t } = useContext(LanguageContext)
    const [stats, setStats] = useState([])

    useEffect(() => {
        Aos.init({ duration: 1000 })
        const savedStats = localStorage.getItem('admin_stats');
        let updatedStats;
        if (savedStats) {
            updatedStats = JSON.parse(savedStats).filter(item => item.title !== "Mavjud kurslar soni");
        } else {
            updatedStats = statsData.filter(item => item.title !== "Mavjud kurslar soni");
        }

        setStats(updatedStats)
        localStorage.setItem('admin_stats', JSON.stringify(updatedStats))
    }, [])

    return (
        <section className="stats-container" id='about'>
            <div className="stats-badge" data-aos="flip-left">{t("statistics")}</div>
            <h2 className="stats-title">{t("stats")}</h2>
            <p className="stats-subtitle">{t("adds")}</p>
            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.id} className="stat-card" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="stat-icon" data-aos="flip-down">{stat.icon}</div>
                        <p className="stat-label" data-aos="flip-down">{stat.title}</p>
                        <h3 className="stat-value" data-aos="flip-down">{stat.value}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Statistics
