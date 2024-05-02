import { StateCreator } from 'zustand'



 const createUserStore: StateCreator<{}> = (set) => ({
    user: {
        id: 0,
        name: '',
        email: ''
    },
    setUser: (user: any) => set({ user }),
})

export default createUserStore