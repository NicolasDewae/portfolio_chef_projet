import React from "react";
import "./Contact.css";
import { contact, form } from '../../config/i18n';

const Contact = ( translate ) => {
    return (
        <>
            <div id="contact">
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
                        {form.map((formData) => {
                            formData = translate.data ? formData.fr : formData.en;
                            return (
                                <>
                                    <div>
                                        <input type="text" name="firstname" placeholder={ formData[0].placeholder } />
                                    </div>
                                    <div>
                                        <input type="text" name="lastname" placeholder={ formData[1].placeholder } />
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder={ formData[2].placeholder } />
                                    </div>
                                    <div>
                                        <textarea type="text" name="message" placeholder={ formData[3].placeholder } />
                                    </div>
                                    <div>
                                        <input type="hidden" name="_captcha" value="true"/>
                                    </div>
                                    <div>
                                        <button type="submit">{ formData[4].title }</button>
                                    </div>
                                </>
                            )
                        })}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;