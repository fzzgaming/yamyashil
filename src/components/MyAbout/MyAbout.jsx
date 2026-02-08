import Aos from "aos"
import { useEffect } from "react"
import "./MyAbout.scss"
import 'aos/dist/aos.css'
function MyAbout() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return <>
        <div className="my-about">
            <h2 data-aos="fade-right">Men haqimda</h2>
            <h3>Jo'raqulova Feruza</h3>
            <div className="card-about" data-aos="flip-up">
                <div className="image-div">
                    <img src="/img/user.png" alt="" />
                </div>
                <div className="user-about">
                    <p>“Qashqadaryo viloyati hokimi stipendiyasi” sovrindori - O’zbekiston Bolalar Tashkiloti Qashqadaryo viloyati “Ustoz Ai” sardori - Grafik dizayner - ”Top izlanuvchi 2025" ko’krak nishoni sohibasi - 3 - 4 Xalqaro Ekologiya va turizm qurultoyi ishtirokchisi - 10+ camplar ishtirokchisi</p>
                    <p>Raqamli avlod qizlari Respublika tanlovi bosqichi yoʻllanmasi sohibasi</p>
                </div>
            </div>
        </div>
    </>
}
export default MyAbout