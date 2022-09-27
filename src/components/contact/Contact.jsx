import React from "react";
import "./Contact.css";
import { contact } from '../../config/i18n';

const Contact = ( translate ) => {
    return (
        <>
            <div className="contact">
                <div className="contact_content">
                    {contact.map((contactData) => {
                        contactData = translate.data ? contactData.fr : contactData.en;
                        return (
                            contactData.map((item) => {
                                return (
                                    <>
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                    </>
                                )
                            })
                        )
                    })}
                    <form className="contact_form" action="" method="POST">
                        <input type="hidden" name="_next" value="/contact"/>
                        <div>
                            <input type="text" name="firstname" placeholder="Firstname"/>
                        </div>
                        <div>
                            <input type="text" name="lastname" placeholder="Lastname"/>
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email Address"/>
                        </div>
                        <div>
                            <textarea type="text" name="message" placeholder="Message"/>
                        </div>
                        <div>
                            <input type="hidden" name="_captcha" value="true"/>
                        </div>
                        <div>
                            <button type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;