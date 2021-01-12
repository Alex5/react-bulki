import React from "react";

const Categories = ({items}) => {

    const itemsNames = items.map((name) => (<li key={Math.random()}>{name}</li>))

    console.log(items)

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
               {itemsNames}
            </ul>
        </div>
    )
}

export default Categories;