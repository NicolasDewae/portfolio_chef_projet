import React from "react";
import "./ServicesList.css";
import { servicesListData } from '../../config/i18n';

const ServiceList = ( translate ) => {
    return (
        <>
            <div id="service">
                <div className="service_list">
                    {servicesListData.map((serviceData) => {
                        serviceData = translate.data ? serviceData.fr : serviceData.en;
                        return (
                            serviceData.map((item) => {
                                return (
                                    
                                    <div className="service_item">
                                        <h1>{item.title}</h1>
                                        {Object.values(item.description).map((description, index) => {
                                            return (
                                                <div key={index} className="timeline_item_content_description">
                                                    <p>{description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ServiceList;