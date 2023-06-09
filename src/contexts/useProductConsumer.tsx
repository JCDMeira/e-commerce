import { ReactNode, createContext, useContext, useReducer } from 'react';
import { ActionsTypes } from '../reducer/index.ts';
import {
  ProductReducer,
  initialProductState,
} from '../reducer/Products.reducer.ts';

type ContextType = {
  state: typeof initialProductState;
  dispatch: React.Dispatch<ActionsTypes>;
};

const ProductContext = createContext<ContextType>({} as ContextType);

type ContextProviderProps = {
  children: ReactNode;
};

const ProductContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(ProductReducer, initialProductState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const UseProductConsumer = () => useContext(ProductContext);

export { ProductContextProvider, UseProductConsumer };
