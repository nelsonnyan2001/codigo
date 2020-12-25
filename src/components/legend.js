import React from 'react';
import './legend.css';
import CMS from '../svg/cms.svg';
import MOBILE from '../svg/mobile.svg';
import PC from '../svg/pc.svg';
import UI from '../svg/ui.svg';

export default function legend() {
    return (
        <div className="legend-container">
            <strong>
                LEGEND
            </strong>
            <div className="legend-parent">

                <div>
                    <img src={MOBILE} alt="Mobile" />
                        APP
                </div>
                <div>
                    <img src={PC} alt="Web" />
                        WEB
                </div>
                <div>
                    <img src={CMS} alt="CMS" />
                        CMS
                </div>
                <div>
                    <img src={UI} alt="UI / UX" />
                        UI/UX
                    </div>
            </div>
        </div>
    )
}
