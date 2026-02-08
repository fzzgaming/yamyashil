import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMail,HiLogin, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import Aos from 'aos';
import './AdminLogin.scss';
import 'aos/dist/aos.css';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 800 })
        if (localStorage.getItem('isLoggedIn') === 'true') {
            navigate('/admin')
        }
    }, [navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setTimeout(() => {
            if (formData.email === 'feruz' && formData.password === 'admin123') {
                localStorage.setItem('isLoggedIn', 'true')
                navigate('/admin') 
            } else {
                setError(true)
                setLoading(false)
            }
        }, 1500)
    }

    return (
        <div className="admin-light-auth">
            <div className="auth-card" data-aos="zoom-in">
                <div className="auth-info">
                    <div className="brand-logo"><img src="/img/logo.png" alt="Logo" /></div>
                    <h1>Xush kelibsiz!</h1>
                    <p>Boshqaruv paneliga kirish uchun ma'lumotlarni kiriting</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={`input-box ${error ? 'error-state' : ''}`}>
                        <label>Login</label>
                        <div className="field">
                            <HiLogin className="icon" />
                            <input type="text" placeholder="feruz" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                    </div>
                    <div className={`input-box ${error ? 'error-state' : ''}`}>
                        <label>Parol</label>
                        <div className="field">
                            <HiOutlineLockClosed className="icon" />
                            <input type={showPass ? "text" : "password"} placeholder="••••••••" required onChange={(e) => setFormData({...formData, password: e.target.value})} />
                            <div className="eye" onClick={() => setShowPass(!showPass)}>
                                {showPass ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                            </div>
                        </div>
                    </div>
                    {error && <span className="error-text">Login yoki parol noto'g'ri!</span>}
                    <button type="submit" disabled={loading} className={loading ? 'btn-loading' : ''}>
                        {loading ? <div className="loader"></div> : "Kirish"}
                    </button>
                </form>
                <div className="auth-footer">
                    <span onClick={() => navigate('/')}>← Bosh sahifaga qaytish</span>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin