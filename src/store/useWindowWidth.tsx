import { create } from "zustand"

interface state {
 windowWidth: number
}


interface Actions {
 setWindowWidth: (width: number) => void
}


const INITIAL_STATE: state = {
 windowWidth: 0
}


export const useStore = create<state & Actions>((set) => ({
 windowWidth: INITIAL_STATE.windowWidth,
 setWindowWidth: (width: number) => {
  set(state => ({
   windowWidth: width
  }))
 }
}))