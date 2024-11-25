import { create } from 'zustand';

// Create Zustand store
const useStore = create((set) => ({
    users: [], // An empty array to store users
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    updateUser: (index, updatedUser) =>
        set((state) => {
            const updatedUsers = [...state.users];// Create a copy of the users array
            updatedUsers[index] = updatedUser;// Update the user at the given index
            return { users: updatedUsers };  // Return the new state with the updated users array
        }),
    deleteUser: (index) => set((state) => ({
        users: state.users.filter((_, idx) => idx !== index),  // Filter out the user at the given index
    })),

}));

export default useStore;
