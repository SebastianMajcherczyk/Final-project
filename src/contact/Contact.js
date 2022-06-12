
import { useState, useEffect, useRef } from 'react';
import { send } from 'emailjs-com';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './Contact.scss';
import ReCAPTCHA from "react-google-recaptcha";


const validateEmail = (email) => {
    if(email.length === 0){
        return "E-mail jest wymagany"
    } else if (!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(email)) {
        return "Adres e-mail nieprawidłowy"
    }
    return null;
}

const validate = toSend => {
    const emailError = validateEmail(toSend.reply_to);
    if(emailError){
        return emailError
    }

    if (toSend.reply_to.length < 7) {
        return "E-mail jest wymagany"
    } else if (!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(toSend.reply_to)) {
        return "Adres e-mail nieprawidłowy"
    }
    return null
}

const formConfig = {
    from_name: {
        isFieldChecked: true,
        value: '',
        errors: null,
        validators: {
            minLength: (name) => name.length >=3 ? null : 'Imię jest za krotkie',
            maxLength: (name) => name.length < 15 ? null : 'Imię jest za długie'
        }
    },
    to_name: {
        isFieldChecked: true,
        value: '',
        errors: null,
        validators: {
            minLength: (name) => name.length >=3 ? null : 'Nazwisko jest za krotkie',
            maxLength: (name) => name.length < 15 ? null : 'Nazwisko jest za długie'
        }
    },
    message: {
        isFieldChecked: true,
        value: '',
        errors: null,
        validators: {
            minLength: (name) => name.length >=3 ? null : 'Wiadomość jest za krótka'
        }
    },
    reply_to: {
        isFieldChecked: true,
        value: '',
        errors: null,
        validators: {
            correctMail: (name) => /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(name) ? null : 'Adres email nieprawidłowy'
        }
    },
    capcha: {
        isFieldChecked: true,
        value: false,
        errors: 'Zweryfikuj captcha',
        validators: {
            isChapchaValid: (value) => value ? null : 'Zweryfikuj Captcha'
        }
    }

}

const Contact = () =>  {
    const recapchaRef = useRef(undefined);

    //const [submitButtonText, setSubmitButton] = useState('Wyślij')
    const [formState, setFormState] = useState(formConfig);
    const [sendButtonDisabled, setSendButtonState] = useState(true);
    //const [error, setError] = useState('')f

    useEffect(()=> {
        console.log('recapcha', recapchaRef)
    }, [recapchaRef.current])

    useEffect(()=> {
        let wosFormStateChanged = false;
        const newFormState = {...formState};

        //const xyz = {
            //sample: 'test',
          //  isValid: true
        //}
        // Object.entries(xyz) => [['sample', 'test'], ['iSValid', true]]
        // Object.values(xyz) => ['test', true]
        // Object.keys(xyz) => ['sample', 'isValid']


        Object.entries(formState).forEach(([fieldName, fieldConfig]) => {
            const validators = fieldConfig.validators;
            console.log(fieldConfig)
            const validatorsFun = Object.values(validators);//tworzenie tablicy funkcji walidacyjnych (baz ich nazw)
            const validatorsLength = validatorsFun.length;

            if(fieldConfig.isFieldChecked){
                return;
            }

            for (let i=0 ; i< validatorsLength; i++){
                const validationResponse = validatorsFun[i](fieldConfig.value);
                if(validationResponse){
                    newFormState[fieldName].errors = validationResponse;
                    wosFormStateChanged = true;
                    break;
                } else {
                    newFormState[fieldName].errors = '';
                    
                }
            }

            newFormState[fieldName].isFieldChecked = true;
            //Object.values(validators).forEach((validator)=> {
            //    const validationResponse = validator(formConfig.value)
           // })

        })
        if(wosFormStateChanged){ // dokonuje sie podmiana wartosci formConfig
            setFormState(newFormState)
        }


    }, [formState])
    
    useEffect(() => {
        let isFormValid = true;
        Object.entries(formState).forEach(([fieldName, fieldConfig]) => {
            
            if(fieldConfig.errors && fieldConfig.errors !== ''){
                isFormValid = false;
            }
           

        })
        setSendButtonState(!isFormValid);
    }, [formState])


    const onCapchaChange = (event) => {
        console.log(event);
        const newFormState = {
            ...formState,
            capcha: {
                ...formState.capcha,
                value: event ? true : false,
                isFieldChecked: false
            }
        }
        setFormState(newFormState)

        //setSendButtonState( event ? false : true );
        //console.log("Captcha verified")
    }
   // const [toSend, setToSend] = useState(emptyForm);

    const onSubmit = (e) => {
        e.preventDefault();
       // const errorMsg = validate(toSend)
       // if (errorMsg) {
        //    setError(errorMsg)
           // console.log("Błąd")
          //  return
       // }

        const formValues = Object.entries(formState).reduce((collector, [fieldName, fieldConfig]) => {
                collector[fieldName] = fieldConfig.value;
                return collector;
        }, {})
        console.log(formValues)
        send(
            process.env.REACT_APP_serviceID,
            process.env.REACT_APP_templateID,
            formValues,
            process.env.REACT_APP_userID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

                setTimeout(()=> {
                    setFormState(formConfig);
                    recapchaRef.current.reset();
                }, 1000);
               // setSubmitButton("Formularz wysłany");
               // setTimeout(() => { setSubmitButton('Wyślij'); }, 5000);
               // console.log(toSend.reply_to);


            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

    };

    const handleChange = (e) => {
    console.log(e);
        const {value, name} = e.target // value = d // name="from_name"

        const newFormState = {
        ...formState,
        [name]: {
            ...formState[name],
            value: value,
            isFieldChecked: false
            }
        }
        setFormState(newFormState)
       // setToSend({ ...toSend, [name]: value });
    };
    return (
        <div className="contact container" id="contact">
            <form onSubmit={onSubmit} className="contact-form">
                <input
                    type='text'
                    name='from_name'
                    placeholder='Imię'
                    value={formState.from_name.value}
                    onChange={handleChange}

                />
                <p className={'error-text'}>{formState.from_name.errors}</p>
                <input
                    type='text'
                    name='to_name'
                    placeholder='Nazwisko'
                    value={formState.to_name.value}
                    onChange={handleChange}
                />
                <p className={'error-text'}>{formState.to_name.errors}</p>
                <textarea
                    type='text'
                    name='message'
                    placeholder='Wiadomość'
                    value={formState.message.value}
                    onChange={handleChange}
                />
                <p className={'error-text'}>{formState.message.errors}</p>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Twój adres email'
                    value={formState.reply_to.value}
                    onChange={handleChange}
                />
                <p className={'error-text'}>{formState.reply_to.errors}</p>
                <ReCAPTCHA
                    ref={recapchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={onCapchaChange}
                />
                <p className={'error-text'}>{formState.capcha.errors}</p>
                <button type='submit' disabled={sendButtonDisabled} className={sendButtonDisabled? 'disabled' : 'enabled'}>{sendButtonDisabled ? 'Uzupełnij dane' : 'Wyslij'}</button>
            </form>
            <div className="contact-data">
 
                <div className="contact-list">
                    <span className="post-address"><FontAwesomeIcon icon={faLocationDot}/>  UL. JANA ROSOŁA 44  NR 5
                        02-786 WARSZAWA</span>
                    <span className="phone-number"><FontAwesomeIcon icon={faPhone}/><a href='tel:+48555767676'>+ 48 555 767 676</a> </span>
                    <span className="email"><FontAwesomeIcon icon={faEnvelope}/>  franz.kruger@example.com</span>
                </div>
            </div>
        </div>
    );
}

export {Contact};