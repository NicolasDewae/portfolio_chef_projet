import React from "react";
import "./About.css";
import { motion } from 'framer-motion';
import { about } from "../../config/i18n"
import { useState } from 'react';

const About = () => {

    const [translate, setTranslate] = useState(false);
    const handleTranslate = () => {
        setTranslate(!translate);
    }

    return (
        <>
            <div className="about">
                <motion.div className="about_content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        variants={{
                        visible: { opacity: 1, scale: 1},
                        hidden: { opacity: 0, scale: 0 },
                        }}    
                >
                        {about.map((items) => {
                            items = translate ? items.fr : items.en;
                            return (
                                items.map((item) => {
                                    return (
                                        <>
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </>
                                    )
                                })
                            )
                        })}
                    <div className="btn">
                        <a href="/apropos">Me découvrir</a>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default About;