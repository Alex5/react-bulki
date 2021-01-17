import React from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";
import ReactLoading from 'react-loading';

const Home = ({items, isLoading}) => {
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
                {isLoading
                    ? <ReactLoading type={"spin"} color="#F5C88B" height={50} width={50}/>
                    : <div className="content__items">
                        {items && items.map((item) => (
                            <PizzaBlock key={item.id} {...item}/>
                        ))}
                    </div>}
        </div>
    );
}

export default Home;