import React, {useState} from "react";
import bulkiLogo from "../assets/img/bulki-logo.svg";

const Categories = React.memo(({items, onClickItem}) => {

    const [activeItem, setActiveItem] = useState(null)
    const [showLogo, setShowLogo] = useState(false)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    const changeShowLogo = () => {
       if (window.scrollY > 125) {
           setShowLogo(true)
       } else {
           setShowLogo(false)
       }
    }

    window.addEventListener("scroll", changeShowLogo)

    return (
        <div className={showLogo ? "categories fixed" : "categories"}>
            <ul>
                <div className={showLogo ? "scrollLogo active" : "scrollLogo "}>
                    <img height="100%" src={bulkiLogo} alt="Pizza logo"/>
                </div>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((name, index) => (
                    <li onClick={() => onSelectItem(index)} className={activeItem === index ? 'active' : ''}
                        key={index}>{name}</li>))}
            </ul>
        </div>
    )
})

export default Categories;