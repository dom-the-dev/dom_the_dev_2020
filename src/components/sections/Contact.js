import React, { useState } from "react"
import Section from "../Section"


const Contact = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(name, email, message)
    }

    return (
        <Section
            id="contact"
            showHeadline={true}
            title={"Contact"}
            subline={"Feel free to hit me up"}
        >
            <div className="col-12 col-md-10">
                <form
                    className="dom-form"
                    // action="https://getform.io/f/d1f0fa6b-908b-46d9-89fb-0a2f1e4dcacf"
                    // method="POST"
                    onSubmit={(e) => submitForm(e)}
                >
                    <div className="row">
                        <div className="col-6">
                            <div className="dom-form__group">
                                <label
                                    className="dom-form__label"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="dom-form__input"
                                    type="name"
                                    name="name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="dom-form__group">
                                <label
                                    className="dom-form__label"
                                    htmlFor="name"
                                >
                                    Email
                                </label>
                                <input
                                    className="dom-form__input"
                                    type="email"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="dom-form__group">
                                <label
                                    className="dom-form__label"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="dom-form__textarea"
                                    name="message"
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button type="submit">Hit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Section>
    )
}

export default Contact
