import React from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({items}) => {
    const categoriesItems = [
        "пончики",
        "маффины",
        "пряники",
        "сочники",
        "плюшки",
        "печенье",
    ]

    const sortItems = [
        "популярности",
        "цене",
        "заказам",
    ]

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoriesItems}
                />
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Вся выпечка</h2>
            <div className="content__items">
                {items && items.map((item) => (
                    <PizzaBlock key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
}

export default Home;