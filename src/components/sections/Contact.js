import React, { useState } from "react"
import Section from "../Section"
import axios from "axios";

const Contact = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        setEmail('')
        setName('')
        setMessage('')

        axios({
            method: "post",
            url: "https://getform.io/f/c223ec51-cf67-408c-8661-b7ef918f27cb",
            data: formData
        })
            .then(response => {
                if (response.status === 200) {
                    setResponse('Email has been sent.')
                }
            })
            .catch(error => {
                setError('An error occured, please try again later.')
            });


    }

    return (
        <Section
            id="contact"
            showHeadline={true}
            title={"Contact"}
            subline={"Feel free to hit me up"}
        >
            <div className="col-12 col-md-10">
                <div className={"dom-form-message"}>
                    {error && error}
                    {response && response}
                </div>
                <form
                    className="dom-form"
                    onSubmit={(e) => submitForm(e)}
                >
                    <div className="row">
                        <div className="col-6">
                            <div className="dom-form__group">
                                <input
                                    className={`dom-form__input ${name !== '' ? 'dom-form__input--active' : ''}`}
                                    type="name"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <label
                                    className="dom-form__label"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="dom-form__group">
                                <input
                                    className={`dom-form__input ${email !== '' ? 'dom-form__input--active' : ''}`}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label
                                    className="dom-form__label"
                                    htmlFor="name"
                                >
                                    Email
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="dom-form__group">
                                <textarea
                                    value={message}
                                    className={`dom-form__textarea ${message !== '' ? 'dom-form__textarea--active' : null}`}
                                    name="message"
                                    onChange={e => setMessage(e.target.value)}
                                />
                                <label
                                    className="dom-form__label"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="col-12" type="submit">Hit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Section>
    )
}

export default Contact
