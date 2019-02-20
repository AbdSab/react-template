import React from 'react';
import classNames from 'classnames';

const Button = ({text, isOutline}) => {
    const outline = isOutline?'btn-outline-primary':'btn-primary';
    const classes = `btn btn-lg btn-block ${outline}`;
    return (
        <button type="button" className={classes}>{text}</button>
    )
}

export default Button;