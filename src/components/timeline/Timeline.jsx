import React from "react";
import "./Timeline.css";
import { timeline } from '../../config/i18n';

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
                                            <div className="timeline_list_item">
                                                {item.id % 2 !== 0 ? (
                                                    <>
                                                        {console.log(item.id)}
                                                        <div className="timeline_item itemUp">
                                                            <div className="timeline_item_content contentUp">
                                                                <div className="timeline_item_content_title">
                                                                    <h2>{item.title}</h2>
                                                                    <h3>{item.company}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="time timeUp">
                                                                <div className="timeline_line left">
                                                                </div>
                                                                <div className="calendar">
                                                                    <p>
                                                                        {item.date}
                                                                        </p>
                                                                    </div>
                                                                <div className="timeline_line right">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="timeline_item itemDown">
                                                            <div className="time timeDown">
                                                                <div className="timeline_line left">
                                                                </div>
                                                                <div className="calendar">
                                                                    <p>
                                                                    {item.date}
                                                                    </p>
                                                                </div>
                                                                <div className="timeline_line right">
                                                                </div>
                                                            </div>
                                                            <div className="timeline_item_content contentDown">
                                                                <div className="timeline_item_content_title">
                                                                    <h2>{item.title}</h2>
                                                                    <h3>{item.company}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
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