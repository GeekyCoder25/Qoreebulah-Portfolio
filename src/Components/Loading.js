import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ohayo from "../audio/Azu-nyan Ohayo.mp3";
import konnichiwa from "../audio/Cute Konnichiwa.mp3";
import moshi from "../audio/Moshi Moshi - Shinobu Kocho.mp3";

const Loading = () => {
    const [countdown, setcountdown] = useState(0);
    const navigate = useNavigate();

    const date = new Date();
    const hour = date.getHours();
    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown < 100) {
                setcountdown(countdown + 1);
            } else if (countdown >= 100) {
                setTimeout(() => navigate(`/home`), 1000);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [countdown, navigate]);
    useEffect(() => {
        let audio = document.getElementById("audio1");
        if (hour < 12) {
            audio.src = ohayo;
        } else if (hour < 16) {
            audio.src = moshi;
        } else audio.src = konnichiwa;
        audio.play();
        
        return () => {
            console.log();
        }
    }, [hour])

    return (
        <header className="loading">
            <h1>
                <span className="countdown">
                    {countdown < 10 ? "0" + countdown : countdown}
                    <span className="hyphen"> - </span>100
                </span>
                YOUR <br />
                WEB EXPERIENCE <br />
                IS LOADING RIGHT <span className="now">NOW</span>
            </h1>
            <p>
                Please wait <br /> a few seconds
            </p>
            <audio src={ohayo} id="audio1"></audio>
        </header>
    );
};
export default Loading;
