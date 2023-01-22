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
        try {
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
        } catch (err) {
            document.querySelector("#submit-button").innerHTML = "Send Message"
            document.getElementById("mailError").classList.remove("d-none")
            setTimeout(() => {
                document.getElementById("mailError").classList.add("d-none")
            }, 10000);
        }
    }

    const dismissAlert = (event) => {
        event.preventDefault();
        document.getElementById("mailError").classList.add("d-none");
    }

    return (
        <div id="contact" className="contact-main">
            <div className="contact-container">
            
                <h1 className="contacth1">Hire Me</h1>
                <div id="mailAlert" class="alert mail-alert text-center d-none fixed-top" role="alert">
                    Your message has been sent successfully!<br />I will contact you as soon as possible
                </div>
                <div id="mailError" class="alert mail-alert-error alert-dismissible text-center d-none fixed-top fade show" role="alert">
                    <a onClick={dismissAlert} className="close" data-dismiss="alert" aria-label="Close">
                    <i class="bi bi-x-lg"></i>
                    </a>
                    <h1><i class="bi bi-exclamation-triangle"></i></h1>
                    <h3 style={{ fontWeight: '700' }}>Heroku free dynos are no longer available!</h3>
                    <p>I'm extemely sorry for inconvienece as you know heroku free dynos are no longer available. I'm fixing it by finding an alternative to heroku to deploy my python server there.</p>
                    <p>Until then you can email me directly on my email address</p>
                    <a className="btn btn-outline-info" href="mailto:uxair.abs@gmail.com">Email Here</a>

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