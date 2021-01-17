import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({outline, className, children}) => {
    return (
        <div>
            <button onClick={() => {
                console.log('тип он клик')
            }} className={classNames('button', className, {
                'button--outline': outline
            })}>{children}</button>
        </div>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;