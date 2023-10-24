import {create} from 'zustand'


interface State {
  loading: boolean
}

interface Actions {
  setLoading: (stat:State['loading']) => void
}

export const useLoading = create<State & Actions>((set) => {
  
  return{
    loading: false,
    setLoading: (stat) => set((state) => {
      return{
        ...state,
        loading: stat
      }
    })
  }

})