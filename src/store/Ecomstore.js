import { create } from 'zustand';

//Creating the Zustand store
const Ecomstore = create((set) => ({
    user: null,
    products: [
        {
            id: 1, name: 'Kulfi', price: 30, image: 'ice1.jpg',
            description: 'Kulfi is a frozen dairy dessert from the Indian subcontinent.'
        },
        {
            id: 2, name: 'Choco cone', price: 40, image: 'ice2.jpg',
            description: 'Chocolate ice cream is ice cream with natural or artificial chocolate flavoring'
        },
        {
            id: 3, name: 'Cassata', price: 70, image: 'casatta.jpg',
            description: 'Cassata is an indulgent dessert with colourful layers of tutti frutti, pista, and strawberry ice cream'
        },
    ],
    cart: [],
    registerUser: (username, password) => set({ user: { username, password } }), //Action to register
    addToCart: (item) => set((state) => {
        // Check if the item already exists in the cart
        const existingItem = state.cart.find((i) => i.id === item.id);
        if (existingItem) {
            // If it exists, increase the quantity
            return {
                cart: state.cart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
            };
        } else {
            // If it doesn't exist, add the item with quantity 1
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }
    }), // Action to add item to cart
    removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId), })), // Action to remove item from cart
    clearCart: () => set({ cart: [] }), // Action to clear cart
    increaseQuantity: (itemId) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ),
    })), // Action to increase item quantity
    decreaseQuantity: (itemId) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
    })), // Action to decrease item quantity
}));

export default Ecomstore;
