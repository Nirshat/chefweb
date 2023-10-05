import {create} from 'zustand'


interface State {
  loading: boolean
}

interface Action {
  setLoading: (stat: State['loading']) => void
}


const useLoading = create<State & Action>((set) => (
  {
    loading: false,
    setLoading: (stat) => set((state) => ({...state, loading:stat})),
  }
))

export default useLoading