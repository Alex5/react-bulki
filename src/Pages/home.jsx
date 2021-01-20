import React from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import filters, {setCategory, setSortBy, setSortThunk} from "../redux/reducers/filters";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";
import {fetchPizzas} from "../redux/reducers/pizzas";

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizzasData}) => pizzasData.items)
    const isLoaded = useSelector(({pizzasData}) => pizzasData.isLoaded)
    const {category, sortBy} = useSelector(({filtersData}) => filtersData)

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [sortBy, category])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const categoriesItems = [
        "пончики",
        "маффины",
        "пряники",
        "сочники",
        "плюшки",
        "печенье",
    ]

    const sortItems = [
        { name: 'популярности', type: 'popular', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавит', type: 'name', order: 'asc' },
    ];

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoriesItems}
                />
                <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems}/>
            </div>
            <h2 className="content__title">Вся выпечка</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((item) => (
                        <PizzaBlock isLoading={true} key={item.id} {...item}/>

                    )) : Array(10)
                        .fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index}/>)}
            </div>
        </div>
    );
}

export default Home;