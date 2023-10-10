import { create } from "zustand"

interface price {
 min: number | null
 max: number | null
}

interface type{
 type: 'All' | 'Apartment' | 'Hostel'
}


// defining interface of filter
interface state {
 showFilter: boolean
 type : 'All' | 'Apartment' | 'Hostel'
 price: price
 NoRooms: Array<Number>,
 NoBedRooms: Array<Number>,
}

interface Actions {
 toggleFilter: () => void
 setType: (type : 'All' | 'Apartment' | 'Hostel' ) => void
}

const INITIAL_STATE: state = {
 showFilter: false,
 type: 'All',
 price: {
  min: null,
  max: null,
 },
 NoRooms: [],
 NoBedRooms: []
}


export const useStore = create<state & Actions>((set) => ({
 showFilter: INITIAL_STATE.showFilter,
 type: INITIAL_STATE.type,
 price: INITIAL_STATE.price,
 NoBedRooms: INITIAL_STATE.NoBedRooms,
 NoRooms: INITIAL_STATE.NoRooms,
 toggleFilter: () => {
  set(state => ({
   ...state,
   showFilter: !state.showFilter
  }))
 },
 setType: (type: 'All' | 'Apartment' | 'Hostel') => {
  set(state => ({
   ...state,
   type: type
  }))
 }
}))