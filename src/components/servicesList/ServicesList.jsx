import React from "react";
import "./ServicesList.css";
import { servicesListData } from '../../config/i18n';

const ServiceList = ( translate ) => {
    return (
        <>
            <div className="service">
                <div className="service_content">
                    <div className="service_list">
                        {servicesListData.map((serviceData) => {
                            serviceData = translate.data ? serviceData.fr : serviceData.en;
                            return (
                                serviceData.map((item) => {
                                    return (
                                        
                                        <div className="service_item">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                })
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceList;