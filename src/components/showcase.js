import React from 'react';
import './showcase.css';
import CMS from '../svg/cms.svg';
import MOBILE from '../svg/mobile.svg';
import PC from '../svg/pc.svg';
import UI from '../svg/ui.svg';


export default function showcase(props) {

    var bgStyling = {
        backgroundImage: `url(${props.item.img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }


    var filteredList = props.item.category.slice()

    filteredList.shift()

    var joinedString = filteredList.join(", ")

    return (
        <div className="showcase-parent">
            <div className="overlay" style={bgStyling}>
            </div>
            <div className="bg-dark"></div>
            <div className="text-holder">
                <p>
                    {joinedString}
                </p>
                <h3>
                    {props.item.name}
                </h3>
            </div>
            <div className="logos-holder">

                {props.item.legend.includes("APP") && <div className="svg"><img src={MOBILE} alt="App" /> </div>}
                {props.item.legend.includes("PC") && <div className="svg"><img src={PC} alt="PC" /> </div>}
                {props.item.legend.includes("CMS") && <div className="svg"><img src={CMS} alt="CMS" /> </div>}
                {props.item.legend.includes("UI") && <div className="svg"><img src={UI} alt="UI" /> </div>}

            </div>
        </div>
    )
}

