import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { reviews as initialReviews, lessons as initialLessons, statsData as initialStats } from "../../utils/constants"
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineBookOpen, HiOutlinePlusCircle, HiOutlineTrash, HiOutlineLogout, HiOutlinePhotograph } from 'react-icons/hi'
import { toast } from 'react-toastify';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import './Admin.scss'
const Admin = () => {
    const navigate = useNavigate()
    const [newTeacher, setNewTeacher] = useState({ name: '', title: '', image: '' })
    const [newLesson, setNewLesson] = useState({ name: '', time: '', videoId: '' })
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [startupIdeas, setStartupIdeas] = useState(() => {
        const saved = localStorage.getItem('startup_ideas')
        return saved ? JSON.parse(saved) : []
    })
    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem('admin_reviews')
        return saved ? JSON.parse(saved) : initialReviews
    })
    const [lessons, setLessons] = useState(() => {
        const saved = localStorage.getItem('admin_lessons')
        return saved ? JSON.parse(saved) : initialLessons
    })
    const [stats, setStats] = useState(() => {
        const saved = localStorage.getItem('admin_stats')
        return saved ? JSON.parse(saved) : initialStats
    })
    const handleBack = () => navigate('/')
    useEffect(() => {
        document.title = "Admin Panel"
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            navigate('/login')
        }
    }, [navigate])
    useEffect(() => {
        const handleStorageChange = () => {
            const saved = localStorage.getItem('startup_ideas')
            if (saved) setStartupIdeas(JSON.parse(saved))
        }
        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])
    const deleteStartupIdea = (id) => {
        const updatedIdeas = startupIdeas.filter(idea => idea.id !== id)
        setStartupIdeas(updatedIdeas)
        localStorage.setItem('startup_ideas', JSON.stringify(updatedIdeas))
        toast.error("G'oya o'chirildi")
    }
    useEffect(() => {
        localStorage.setItem('admin_reviews', JSON.stringify(reviews))
        localStorage.setItem('admin_lessons', JSON.stringify(lessons))
        localStorage.setItem('admin_stats', JSON.stringify(stats))
    }, [reviews, lessons, stats])

    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
        document.body.style.overflow = isOpenModal ? "auto" : "hidden"
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewTeacher({ ...newTeacher, image: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        navigate('/')
        toast.info("Siz Admin Paneldan chiqdingiz!")
    }
    const handleStatChange = (id, newValue) => {
        setStats(stats.map(s => s.id === id ? { ...s, value: newValue } : s))
    }
    const addTeacher = (e) => {
        e.preventDefault()
        if (!newTeacher.name || !newTeacher.title || !newTeacher.image) {
            toast.error("Ma'lumotlarni to'ldiring!")
        } else {
            setReviews([{
                id: uuidv4(),
                name: newTeacher.name,
                title: newTeacher.title,
                role: "O'qituvchi",
                flag: '/img/uz.svg',
                img: newTeacher.image
            }, ...reviews])
            setNewTeacher({ name: '', title: '', image: '' })
            e.target.reset()
            toast.success("O'qituvchi qo'shildi!")
        }
    }
    const addLesson = (e) => {
        e.preventDefault();
        if (!newLesson.videoId) {
            toast.error("Video ID yozing!")
        } else {
            const colors = ['#eef6ff', '#f0faf5', '#fff5eb', '#f0fad4']
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            setLessons([{ id: uuidv4(), name: "Yangi dars", time: "10:00", videoId: newLesson.videoId, color: randomColor }, ...lessons])
            setNewLesson({ videoId: '' })
            toast.success("Dars qo'shildi!")
        }
    }
    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="logo">FERUZA ADMIN</div>
                <nav>
                    <div className="nav-item "><HiOutlineBookOpen /> Boshqaruv</div>
                    <div className="nav-item" onClick={handleBack}><HiOutlineLogout /> Sahifaga qaytish</div>
                    <div className="nav-item logout" onClick={handleOpenModal} style={{ marginTop: 'auto', color: '#ff4d4d' }}>
                        <HiOutlineLogout /> Chiqish
                    </div>
                    {isOpenModal && <ConfirmModal onConfirm={handleLogout} onCancel={handleOpenModal} />}
                </nav>
            </aside>
            <main className="content">
                <header><h2>Admin Boshqaruv Markazi</h2></header>
                <div className="stats-container">
                    {stats.map((item) => (
                        <div key={item.id} className="stat-card">
                            <span className="stat-icon">{item.icon}</span>
                            <div className="details">
                                <label>{item.title}</label>
                                <input type="text" value={item.value} onChange={(e) => handleStatChange(item.id, e.target.value)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grids-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
                    <section className="admin-box" style={{ maxWidth: '400px', width: '100%' }}>
                        <h3>Raqobatchilar</h3>
                        <form onSubmit={addTeacher} className="form-inline">
                            <input type="text" placeholder="Kompaniya nomi" value={newTeacher.title} onChange={(e) => setNewTeacher({ ...newTeacher, title: e.target.value })} />
                            <input type="text" placeholder="Ism yoki mavzu" value={newTeacher.name} onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })} />
                            <div className="image-upload-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <label className='file-label' htmlFor="file-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: '#f0f0f0', padding: '8px', borderRadius: '8px', fontSize: '13px' }}>
                                    <HiOutlinePhotograph /> {newTeacher.image ? "Rasm tanlandi" : "Rasm"}
                                </label>
                                <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                                {newTeacher.image && <img src={newTeacher.image} alt="preview" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} />}
                            </div>
                            <button type="submit" className="add-btn"><HiOutlinePlusCircle /> Qo'shish</button>
                        </form>
                        <div className="scroll-list">
                            {reviews.map(item => (
                                <div key={item.id} className="list-item">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                                        <img src={item.img} alt="user" style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} />
                                        <span style={{ fontSize: '13px', wordBreak: 'break-all' }}>{item.title} -</span>
                                        <span style={{ fontSize: '13px', wordBreak: 'break-all' }}>{item.name}</span>
                                    </div>
                                    <HiOutlineTrash className="del-icon" onClick={() => setReviews(reviews.filter(r => r.id !== item.id))} />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="admin-box" style={{ maxWidth: '400px', width: '100%' }}>
                        <h3>Dars Jadvali</h3>
                        <form onSubmit={addLesson} className="form-inline">
                            <input type="text" placeholder="YouTube Video ID" value={newLesson.videoId} onChange={(e) => setNewLesson({ ...newLesson, videoId: e.target.value })} />
                            <button type="submit" className="add-btn"><HiOutlinePlusCircle /> Qo'shish</button>
                        </form>
                        <div className="scroll-list">
                            {lessons.map(item => (
                                <div key={item.id} className="list-item">
                                    <span style={{ fontSize: '13px' }}>ID: {item.videoId}</span>
                                    <HiOutlineTrash className="del-icon" onClick={() => setLessons(lessons.filter(l => l.id !== item.id))} />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="admin-box" style={{ maxWidth: '400px', width: '100%' }}>
                        <h3>Kelib tushgan g‘oyalar</h3>
                        <div className="scroll-list">
                            {startupIdeas.length > 0 ? (
                                startupIdeas.map(item => (
                                    <div key={item.id} className="list-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ 
                                            wordBreak: 'break-word', 
                                            overflowWrap: 'anywhere', 
                                            flex: 1,
                                            fontSize: '14px',
                                            lineHeight: '1.4'
                                        }}>
                                            {item.title}
                                        </span>
                                        <HiOutlineTrash 
                                            className="del-icon" 
                                            style={{ flexShrink: 0 }}
                                            onClick={() => deleteStartupIdea(item.id)} 
                                        />
                                    </div>
                                ))
                            ) : (
                                <p style={{ textAlign: 'center', padding: '10px', color: '#999' }}>Hozircha g‘oyalar yo‘q</p>
                            )}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    )
}

export default Admin