import React from "react";
import "./ServicesList.css";
import Service from "../service/Service";

const ServiceList = ({ servicesListData }) => {
    
    return (
        <>
            <div className="service">
                <div className="service_content">
                    <div className="service_list">
                        {servicesListData.map((serviceData) => (
                            <Service servicesListData={serviceData} key={serviceData.title} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceList;