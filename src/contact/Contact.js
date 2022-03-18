
import { useState } from 'react';
import { send } from 'emailjs-com';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './Contact.scss';



const Contact = () =>  {
    const emptyForm = {
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    }
    const buttonText = 'Wyślij'

    const [submitButtonText, setSubmitButton] = useState(buttonText)
    const [toSend, setToSend] = useState(emptyForm);

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_serviceID,
            process.env.REACT_APP_templateID,
            toSend,
            process.env.REACT_APP_userID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

                setTimeout(setToSend(emptyForm), 1000);
                setSubmitButton("Formularz wysłany");
                setTimeout(() => { setSubmitButton(buttonText); }, 5000);


            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className="contact container" id="contact">
            <form onSubmit={onSubmit} className="contact-form">
                <input
                    type='text'
                    name='from_name'
                    placeholder='Imię'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='Nazwisko'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <textarea
                    type='text'
                    name='message'
                    placeholder='Wiadomość'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Twój adres email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>{submitButtonText}</button>
            </form>
            <div className="contact-data">
                <p>
                    In sit amet sapien eros. Integer in tincidunt velit.
                    Ut in tincidunt velit sapien est Cras justo
                    odioda pibus facilisis dignissimos
                    Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem inventore veritatis
                </p>
                <div className="contact-list">
                    <span className="post-address"><FontAwesomeIcon icon={faLocationDot}/>  UL. JANA ROSOŁA 44  NR 5
                        02-786 WARSZAWA</span>
                    <span className="phone-number"><FontAwesomeIcon icon={faPhone}/>  +48 555 767 676 </span>
                    <span className="email"><FontAwesomeIcon icon={faEnvelope}/>  franz.kruger@example.com</span>
                </div>
            </div>
        </div>
    );
}

export {Contact};