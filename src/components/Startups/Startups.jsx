import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import "./Startups.scss"
const Startups = () => {
    const navigate = useNavigate()
    const [ideas, setIdeas] = useState([])
    const [inputValue, setInputValue] = useState("")
    useEffect(() => {
        const savedIdeas = localStorage.getItem("startup_ideas")
        if (savedIdeas) setIdeas(JSON.parse(savedIdeas))
    }, [])
    useEffect(() => {
        localStorage.setItem("startup_ideas", JSON.stringify(ideas))
    }, [ideas])
    const addIdea = () => {
        if (!inputValue.trim()) return
        const newIdea = { id: Date.now(), title: inputValue.trim() }
        setIdeas([newIdea, ...ideas])
        setInputValue("")
    }
    const deleteIdea = (id) => {
        setIdeas(ideas.filter((idea) => idea.id !== id))
    }
    const goToOurStartup = () => {
        navigate("/our-startup")
    }
    return (
        <>
            <Header />
            <section className="startups-container">
                <h2 className="startups-title">Startap g‘oyalar</h2>

                <div className="startups-input">
                    <input
                        type="text"
                        placeholder="Yangi g‘oya yozing..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={addIdea}>Qo‘shish</button>
                </div>
                <div className="startups-grid">
                    {ideas.map((idea) => (
                        <div key={idea.id} className="idea-card">
                            <p>{idea.title}</p>
                            <button className="delete-btn" onClick={() => deleteIdea(idea.id)}>❌</button>
                        </div>
                    ))}
                </div>
            </section>
            <aside className="startups-aside">
                <h2 className="startups-title">Loyihalar</h2>
                <p className="startups-subtitle">
                    Bizning startap g‘oyalaringizni ko‘rib chiqing va loyihamiz bilan tanishing!
                </p>
                <button className="our-startup-btn" onClick={goToOurStartup}>
                    Our Startup
                </button>
            </aside>
        </>
    )
}
export default Startups
