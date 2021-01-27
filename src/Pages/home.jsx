import React, {useState} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import {setCategory, setSortBy} from "../redux/reducers/filters";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";
import {fetchPizzas} from "../redux/reducers/pizzas";
import {addPizzaToCart} from "../redux/reducers/cart";

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizzasData}) => pizzasData.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzasData}) => pizzasData.isLoaded);
    const {category, sortBy} = useSelector(({filtersData}) => filtersData);

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
        {name: 'популярности', type: 'popular', order: 'desc'},
        {name: 'цене', type: 'price', order: 'desc'},
        {name: 'алфавит', type: 'name', order: 'asc'},
    ];

    const [showLogo, setShowLogo] = useState(false)

    const changeShowLogo = () => {
        if (window.scrollY > 125) {
            setShowLogo(true)
        } else {
            setShowLogo(false)
        }
    }

    window.addEventListener("scroll", changeShowLogo)

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <>
            <div className={showLogo ? "content__top fixed" : "content__top"}>
                <Categories
                    showLogo={showLogo}
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoriesItems}
                />
                <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type}
                                 items={sortItems}/>
            </div>
            <div className="container">
                <h2 className="content__title">Вся выпечка</h2>
                <div className="content__items">
                    {items && isLoaded
                        ? items.map((item) => (
                            <PizzaBlock
                                onCLickAddPizza={handleAddPizzaToCart}
                                addedCount={cartItems[item.id] && cartItems[item.id].length}
                                key={item.id}
                                {...item}/>

                        )) : Array(10)
                            .fill(0)
                            .map((_, index) => <PizzaLoadingBlock key={index}/>)}
                </div>
            </div>
        </>
    );
}

export default Home;