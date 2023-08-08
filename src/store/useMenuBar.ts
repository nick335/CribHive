import { create } from "zustand";

// defining interface of menu
interface state {
 isOpen: boolean
}

interface Actions {
 toggleMenu: () => void
}

const INITIAL_STATE: state = {
 isOpen: false
}


export const useStore = create<state & Actions>((set) => ({
 isOpen: INITIAL_STATE.isOpen,
 toggleMenu: () => {
  set(state => ({
   isOpen: !state.isOpen
  }))
 }
}))