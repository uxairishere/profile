import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="contact-main">
            <div className="contact-container">
                <h1 className="contacth1">Hire Me</h1>
                <p className="contactP about-desc">I am available for full time, part time and freelance work. Connect with me via email</p>
                <form>
                    {/* name email */}
                    <div className="row">
                        <div className="col-md-6">
                            <div class="input-container">
                                <label>Name</label>
                                <input type="text" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="input-container">
                                <label>Email</label>
                                <input type="text" required />
                            </div>
                        </div>
                    </div>
                    {/* subject  */}
                    <div class="input-container">
                        <label>Subject</label>
                        <input type="text" required />
                    </div>
                    {/* message */}
                    <div class="input-container">
                        <label>Message</label>
                        <textarea type="text" required />
                    </div>
                    <div style={{textAlign: 'center'}}>
                    <button className="btn btn-outline-warning submit-button">Send Message</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact;