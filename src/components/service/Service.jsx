import React from "react";
import "./Service.css";
import { motion } from "framer-motion";

const Service = ({
    
    servicesListData: {
        title,
        description,
    }

}) => {

    return (
        <>
            <div className="service_item">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Service;