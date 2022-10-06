import React from "react";
import "./Timeline.css";
import { timeline } from '../../config/i18n';
// import calendarMonth from '../../assets/icons/calendar_month.png';

const Timeline = ( translate ) => {
    return (
        <>
            <div id="timeline">
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
                                                        {/* <h3>{item.date}</h3> */}
                                                        <h2>{item.title}</h2>
                                                        <h3>{item.company}</h3>
                                                    </div>
                                                        {/* loop for description elements */}
                                                        {Object.values(item.description).map((description, index) => {
                                                            return (
                                                                <div key={index} className="timeline_item_content_description">
                                                                    <p>{description}</p>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                                <div className="time">
                                                    <div className="timeline_line left">
                                                    </div>
                                                    <div className="calendar">
                                                        <p>
                                                            {item.startDate}
                                                            <p>-</p>
                                                            {/* <div>
                                                                <img src={calendarMonth} alt="" />
                                                            </div> */}
                                                            {item.endDate}
                                                        </p>
                                                    </div>
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