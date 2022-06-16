import { useState } from "react";
const Form = () => {
    const [submit, setsubmit] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Hey');
        setsubmit(`Your info has been sent and will be reviewed, I'll get back to you shortly. Thanks!`)
    }
    return (
        <form action="https://formsubmit.co/toyibe25@gmail.com" method="POST" className="form">
            <p className="contact-me">Contact me</p>
            <h1>Hello,</h1>
            <input type="hidden" name="_subject" value="Qoreeb's Portfolio Form Submit" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
                <label htmlFor="name">MY NAME IS</label>
                <input type="text" name="name" id="name" placeholder="Enter your name here" required /><br />
            </div>
            <div>
                <label htmlFor="email">HERE IS MY EMAIL</label>
                <input type="email" name="email" id="email" placeholder="Enter your email here" required /><br />
            </div>
            <div>
                <label htmlFor="product">I'M LOOKING FOR</label>
                <input type="text" name="product" id="product" placeholder="Enter your product details" required /><br />
            </div>
            <div className="submit-message">{submit}</div>
            <div className="submit">
                <button type="submit" onSubmit={handleSubmit}>Send</button>
            </div>
        </form>
    );
}

export default Form;