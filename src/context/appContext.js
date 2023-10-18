import { createContext, useState } from "react"
export const CartContext = createContext({});

const initialState = {
    item: [],
    userDetial: {}
}

function AppProvider({children}) {
    const [items, setItems] = useState(initialState);
 
    const addtoCart = (title, price) => {
        setItems({...items, item: [...items.item, {title: title, price: price} ] });
    }
    console.log(items)

    return (
        <div>
            <CartContext.Provider value={{ items, addtoCart, setItems }}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default AppProvider;