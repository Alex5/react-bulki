import React from 'react';
import classNames from 'classnames'

const Button = ({outline, className, children}) => {
    return (
        <div>
            <button className={classNames('button', className, {
                'button--outline': outline
            })}>{children}</button>
        </div>
    );
}

export default Button;