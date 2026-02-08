import Header from "../Header/Header"
import "./EcoCartoon.scss"
function EcoCartoon() {
    return (
        <>
            <Header />
            <div className="eco-container">
                <div className="eco-card">
                    <h2>Yashil Makon</h2>
                    <iframe
                        src="https://www.youtube.com/embed/cnCDU6W0pfU?si=Kulu8H-1sgwA1yhU"
                        title="Yashil Makon"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="eco-card">
                    <h2>Quvvatjon</h2>
                    <iframe
                        src="https://www.youtube.com/embed/iq92_tqnK1U?si=NW5i0O4NvdSxNxLO"
                        title="Quvvat"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    )
}
export default EcoCartoon