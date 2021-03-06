import * as types from '../constants/actionTypes';

const initialState = [
  {
    name: 'Bacon',
    bought: false,
    id: 0
  }
];

export default function item(state = initialState, action) {
  switch (action.type) {
    case types.add_item:
      return [
        {
          name: action.name,
          id: state.reduce((maxId, product) => Math.max(product.id, maxId), -1) + 1,
          bought: false,
        }, ...state
      ];

    case types.remove_item:
      return state.filter(product => product.id !== action.id);

    case types.complete_item:
      return state.map(product =>
        product.id === action.id
        ? Object.assign({}, product, { bought: !product.bought })
        : product
      );

    default:
      return state;
  }
}
