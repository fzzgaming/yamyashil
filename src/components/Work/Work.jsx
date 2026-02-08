import { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { lessons as initialLessons } from '../../utils/constants'
import "./Work.scss"
import { HiClock } from 'react-icons/hi'

function Work() {
    const { t } = useContext(LanguageContext)
    const [allLessons] = useState(() => {
        const saved = localStorage.getItem('admin_lessons')
        return saved ? JSON.parse(saved) : initialLessons
    })
    const activeLesson = allLessons && allLessons.length > 0 ? allLessons[0] : null
    return (
        <div className="ibrat-wrapper">
            <div className="main-player" data-aos="flip-up">
                <div className="tv-frame">
                    <div className="video-area">
                        {activeLesson && activeLesson.videoId ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${activeLesson.videoId}?autoplay=1&mute=0`}
                                title="Video Lesson"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="video-placeholder" style={{background:"#2ecc71", width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                <div className="clock-icon" style={{color:"white", fontSize:"50px"}}><HiClock/></div>
                                <h3 style={{color:"white", marginTop:"15px"}}>Hozircha videolar yo'q</h3>
                            </div>
                        )}
                    </div>
                    <div className="tv-bottom-bar">
                        <img src="/icons/logo.png" alt="Logo" onError={(e) => e.target.style.display='none'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work