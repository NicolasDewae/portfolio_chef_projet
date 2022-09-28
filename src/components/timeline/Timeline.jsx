import React from "react";
import "./Timeline.css";
import { timeline } from '../../config/i18n';
import calendarIcon from '../../assets/icons/calendar_month.png';


const Timeline = ( translate ) => {
    return (
        <>
            <div className="timeline">
                <div className="timeline_content">
                    <div className="timeline_list">
                        {timeline.map((timelineData) => {
                            timelineData = translate.data ? timelineData.fr : timelineData.en;
                            return (
                                timelineData.map((item) => {
                                    return (
                                        <>
                                            <div className="timeline_item">
                                                <div className="timeline_item_content">
                                                    <div className="timeline_item_content_title">
                                                        <h2>{item.title}</h2>
                                                    </div>
                                                    <div className="timeline_item_content_description">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <div className="time">
                                                    <div className="timeline_line left">
                                                    </div>
                                                    <img src={calendarIcon} alt="" />
                                                    <div className="timeline_line right">
                                                    </div>
                                                </div>
                                            </div>
                                        </>
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

export default Timeline;