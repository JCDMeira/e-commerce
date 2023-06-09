import { ProductModel } from '../Types';

export type ActionsTypes = {
  type: 'ADD_TO_BASKET' | 'REMOVE_FROM_BASKET';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};
type ProductStateTypes = {
  basket: ProductModel[];
  total: number;
};

export const initialProductState: ProductStateTypes = {
  basket: [],
  total: 0,
};

export const ProductReducer = (
  state: typeof initialProductState,
  action: ActionsTypes,
) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_FROM_BASKET': {
      const productIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id,
      );

      return {
        ...state,
        basket: [...state.basket.filter((_, index) => index !== productIndex)],
        total: state.total + action.payload.price,
      };
    }

    default:
      return { ...state };
  }
};
