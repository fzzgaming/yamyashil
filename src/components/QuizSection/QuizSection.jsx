import { useEffect, useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './QuizSection.scss'
function QuizSection() {
    const { t } = useContext(LanguageContext)
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <section className="quiz-container">
            <div className="quiz-content">
                <div className="phone-mockup" data-aos="flip-left">
                    <div className="phone-screen">
                        <div className="status-bar">
                            <span className="time">9:41</span>
                            <div className="icons">📶 🔋</div>
                        </div>
                        <div className="quiz-header">
                            <span className="close-btn">✕</span>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                            <span className="lives">❤️ ∞</span>
                        </div>
                        <div className="quiz-body">
                            <p className="level">Medium</p>
                            <h3 className="question">Select the correct image</h3>
                            <div className="audio-prompt">
                                <span className="speaker">🔊</span>
                                <strong>Elephant</strong>
                            </div>
                            <div className="quiz-grid">
                                <div className="quiz-option selected">
                                    <img src="https://cdn-icons-png.flaticon.com/512/375/375101.png" alt="Elephant" />
                                    <span>Elephant</span>
                                </div>
                                <div className="quiz-option">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2663/2663249.png" alt="Duck" />
                                    <span>Duck</span>
                                </div>
                                <div className="quiz-option">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3062/3062223.png" alt="Crab" />
                                    <span>Crab</span>
                                </div>
                                <div className="quiz-option">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3133/3133649.png" alt="Crocodile" />
                                    <span>Crocodile</span>
                                </div>
                            </div>
                            <button className="check-btn">Check</button>
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <div className="badge">{t("quizzes")}</div>
                    <h2 className="title">{t("variousQuizzes")}</h2>
                    <p className="description">{t("quizzesDesc")}</p>
                    <Link to={"/quizzes"}>
                        <button>Go quizzes</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default QuizSection