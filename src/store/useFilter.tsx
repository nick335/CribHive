import { create } from "zustand"
// defining interface of filter
interface state {
 showFilter: boolean
}

interface Actions {
 toggleFilter: () => void
}

const INITIAL_STATE: state = {
 showFilter: false
}


export const useStore = create<state & Actions>((set) => ({
 showFilter: INITIAL_STATE.showFilter,
 toggleFilter: () => {
  set(state => ({
   showFilter: !state.showFilter
  }))
 }
}))