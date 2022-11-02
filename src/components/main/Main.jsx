import React from 'react';
import './Main.css';
import { userInfos } from '../../config/i18n';

const Main = () => {
    return (
        <>
            <div id="main">
                <div className="main_content">
                    <h1>{userInfos.firstName + ' ' +userInfos.lastName}</h1>
                    </div>
            </div>
        </>
    );
}

export default Main;