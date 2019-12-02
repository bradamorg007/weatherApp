import React from 'react';

const LogoText = (props) => {

    return (
        <div className={props.divName}>
            <img
                className={props.imgName}
                src="https://static.andigital.com/wp-content/uploads/2017/05/02163341/AND_LOGO_RGB_ON_WHITE.png"
                alt="AND Digital" />
            <span className={props.spanName}>{props.text}</span>
        </div>
    )
}

export default LogoText;