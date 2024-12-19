import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const setWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
        value,
        expiry: now.getTime() + ttl, // Thời gian hết hạn (ms)
    };
    localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Lấy dữ liệu từ localStorage nếu có
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product, quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
    };

    // Lưu giỏ hàng vào localStorage khi cartItems thay đổi
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);
