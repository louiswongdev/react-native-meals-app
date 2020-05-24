import { MEALS } from '../../data/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, actions) => {
  return state;
};

export default mealsReducer;
