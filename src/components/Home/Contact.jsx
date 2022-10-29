import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const formdata = new FormData();
    async function sendEmail(event) {
        event.preventDefault();

        document.querySelector("#submit-button").innerHTML = "Please wait"

        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("subject", subject);
        formdata.append("details", message);

        const response = await axios.post(process.env.REACT_APP_FASTAPI_URL, formdata)

        const data = await response.data

        if (data.status === 'ok') {
            document.querySelector("#submit-button").innerHTML = "Send Message"
            document.getElementById("mailAlert").classList.remove("d-none")
            setTimeout(() => {
                document.getElementById("mailAlert").classList.add("d-none")
            }, 3000);

        } else {
            alert("There was an error")
        }
        


    }

    return (
        <div id="contact" className="contact-main">
            <div className="contact-container">
                <h1 className="contacth1">Hire Me</h1>
                <div id="mailAlert" class="alert mail-alert text-center d-none fixed-top" role="alert">
                    Your message has been sent successfully!<br/>I will contact you as soon as possible
                </div>
                <p className="contactP about-desc">I am available for full time, part time and freelance work. Connect with me via email</p>
                <form onSubmit={sendEmail}>
                    {/* name email */}
                    <div className="row box">
                        <div className="col-md-6">
                            <div class="input-container">
                                <label>Name</label>
                                <input type="text" required
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="input-container">
                                <label>Email</label>
                                <input type="text" required
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* subject  */}
                    <div class="input-container">
                        <label>Subject</label>
                        <input type="text" required
                            onChange={(e) => { setSubject(e.target.value) }}
                        />
                    </div>
                    {/* message */}
                    <div class="input-container">
                        <label>Message</label>
                        <textarea type="text" required
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button id="submit-button" type="submit" className="btn btn-outline-warning submit-button">Send Message</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact;