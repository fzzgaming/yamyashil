import { useState, useContext, useEffect } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { reviews as initialReviews } from '../../utils/constants'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Testimonials.scss'
function Testimonials() {
    const [allReviews, setAllReviews] = useState(initialReviews)
    const [index, setIndex] = useState(0)
    const { t } = useContext(LanguageContext)
    const [cardsToShow, setCardsToShow] = useState(3)
    useEffect(() => {
        const savedReviews = localStorage.getItem('admin_reviews')
        if (savedReviews) {
            setAllReviews(JSON.parse(savedReviews))
        }
        const handleResize = () => {
            if (window.innerWidth < 768) setCardsToShow(1)
            else if (window.innerWidth < 1024) setCardsToShow(2)
            else setCardsToShow(3)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        Aos.init({ duration: 1000 })
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const next = () => {
        if (index < allReviews.length - cardsToShow) setIndex(index + 1)
    }
    const prev = () => {
        if (index > 0) setIndex(index - 1)
    }
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-badge" data-aos="fade-up">{t("testimonialsTitle")}</div>
                <div className="carousel-main">
                    <div 
                        className="cards-track" 
                        style={{ 
                            transform: `translateX(-${index * (100 / cardsToShow)}%)`,
                            display: 'flex', 
                            transition: 'transform 0.5s ease-in-out'
                        }}>
                        {allReviews.map((item) => (
                            <div className="card-item" key={item.id} style={{ flex: `0 0 ${100 / cardsToShow}%` }}>
                                <div className="card-inner" data-aos="flip-left">
                                    <span className="lang-name">{item.title}</span>
                                    <div className="teacher-box">
                                        <div className="avatar">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <strong>{item.name}</strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="nav-controls">
                    <button onClick={prev} disabled={index === 0} className="nav-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button onClick={next} disabled={index >= allReviews.length - cardsToShow} className="nav-btn next">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Testimonials