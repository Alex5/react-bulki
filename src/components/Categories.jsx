import React from "react";
import bulkiLogo from "../assets/img/bulki-logo.svg";
import PropTypes from "prop-types";

const Categories = React.memo(({activeCategory, items, onClickCategory, showLogo}) => {

    return (
        <div className="categories">
            <ul>
                <div className={showLogo ? "scrollLogo active" : "scrollLogo"}>
                    <img height="100%" src={bulkiLogo} alt="Pizza logo"/>
                </div>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((name, index) => (
                    <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''}
                        key={index}>{name}</li>))}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {
    activeCategory: null,
    items: []
}

export default Categories;