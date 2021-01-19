import React, {useState} from "react";
import {Link} from "react-router-dom";
import bulkiLogo from "../assets/img/bulki-logo.svg";

const Categories = ({items, onClickItem}) => {

    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = index => {
        setActiveItem(index)
        onClickItem(index)
    }



    return (
        <div className="categories">
            <ul>
                <div id="headerLogo" className="headerLogo">
                    <img width="35" src={bulkiLogo} alt="Pizza logo"/>
                </div>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((name, index) => (
                    <li onClick={() => onSelectItem(index)} className={activeItem === index ? 'active' : ''}
                        key={index}>{name}</li>))}
            </ul>
        </div>
    )
}

export default Categories;