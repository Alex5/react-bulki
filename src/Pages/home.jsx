import React, {useEffect} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import {setSortThunk} from "../redux/reducers/filters";

const Home = () => {

    const items = useSelector(({pizzasData}) => pizzasData.items)
    const dispatch = useDispatch()

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

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setSortThunk(index))
    },[])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
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