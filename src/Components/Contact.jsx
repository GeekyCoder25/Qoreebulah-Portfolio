import { useState } from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Contact = () => {
    let getDates = new Date()
    let getHour = getDates.getHours()
    let getMinute = getDates.getMinutes()
    let getSecond = getDates.getSeconds()
   
    const [hour, setHour] = useState("0")
    const [minute, setminute] = useState("0")
    const [second, setsecond] = useState("0")

    function handleDate() {
        setHour(getHour);
        setminute(getMinute);
        setsecond(getSecond);
    }
    setTimeout(handleDate, 1000)
    return (
        <article className="contact">
            <Navbar />
            <div className="contact-header">
                <p className="time" onLoad={handleDate}>{hour < 10 ? '0' +hour : hour}:{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}</p><span className="hi">SAY HI</span>
                <h1 className="to">TO QOREEB - <br /> <a href="/" className="myemail">QORIBULLAHABUBAKAR <br /> @GMAIL.COM</a></h1>
            <button type="submit" className="contact-absolute">Contact Me</button>
            </div>
            <div className="contact-footer">
            <Socials />
            </div>
            <Form />
        </article>
    );
}

export default Contact;