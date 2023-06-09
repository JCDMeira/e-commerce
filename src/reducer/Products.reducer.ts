import { ProductModel } from '../Types';

export type ActionsTypes = {
  type: 'ADD_TO_BASKET';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};
type ProductStateTypes = {
  basket: ProductModel[];
};

export const initialProductState: ProductStateTypes = {
  basket: [],
};

export const ProductReducer = (
  state: typeof initialProductState,
  action: ActionsTypes,
) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };

    default:
      return { ...state };
  }
};
