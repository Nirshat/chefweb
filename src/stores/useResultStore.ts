import { create } from "zustand";


type State = {
  results: {
    idMeal: string
    strMeal: string
    strMealThumb: string
  }[]
  loading: boolean
}

type Action = {
  updateResults: (res: State['results']) => void
  setLoading: (stat: State['loading']) => void
}

const useResultStore = create<State & Action>((set) => (
  {
    results: [],
    updateResults: (res) => set((state) => ({...state, results: [...res]})),
    loading: false,
    setLoading: (stat) => set((state) => ({...state, loading:stat})),
  }
));


export default useResultStore;