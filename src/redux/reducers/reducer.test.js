import reducers from '../reducers';

test('reducers', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({
        pizzasData: {items: [], isLoaded: false},
        filtersData: {categories: 'популярности', sortBy: 'popular'}
    });
});
