import Header from '../Header/Header';
import { useState } from 'react'
import { questions } from '../../utils/constants'
import './Quiz.scss'
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) setScore(score + 1)
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }
    const restartQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }
    return (
        <>
            <Header />
            <div className="viktorina-qobigi">
                {showScore ? (
                    <div className="natija-oynasi">
                        <h2 className="yakuniy-bal">Natija: {score} / {questions.length}</h2>
                        <p className="tabrik-matni">
                            {score >= 3 ? "Barakalla! Sen tabiat do'stisan! 🌟" : "Yana bir bor urinib ko'r! 🌱"}
                        </p>
                        <button className="qayta-tugmasi" onClick={restartQuiz}>
                            Qayta o'ynash
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="savol-qismi">
                            <div className="savol-raqami">
                                Savol <span>{currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="savol-matni">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="variantlar-ruyxati">
                            {questions[currentQuestion].answerOptions.map((option, index) => (
                                <button
                                    key={index}
                                    className="javob-tugmasi"
                                    onClick={() => handleAnswerClick(option.isCorrect)}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default Quiz