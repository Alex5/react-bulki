import React, {Component} from 'react';

class Button extends Component {

    componentDidMount() {
        console.log('кнопка')
    }

    render() {
        return (
            <div>
                <button>Привет</button>
            </div>
        );
    }
}

export default Button;