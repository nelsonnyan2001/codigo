import React from 'react'
import './cta.css'
import Arrow from '../svg/arrow-red.svg'

export default function cta(props) {
    console.log(props)
    return (
        <div>
            <p className="cta-title">
                {props.text[0]}
                <img src={Arrow} className="arrow" alt="pointer" />
            </p>
            <p className="subtitle">
                {props.text[1]}
            </p>

        </div>
    )
}
