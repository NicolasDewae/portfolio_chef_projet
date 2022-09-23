import React from "react";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="about_content">
                    <h1>A propos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                        quia, voluptas, voluptate, voluptatum quod quibusdam dolorem
                        quidem quos iure voluptates et. Quisquam, quae. Repudiandae
                        voluptates quae, quod quia voluptatem voluptatum.
                    </p>
                    <div className="btn">
                        <a href="/apropos">Me découvrir</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;