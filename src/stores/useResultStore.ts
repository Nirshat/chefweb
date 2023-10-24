import { create } from "zustand";


type State = {
  results: {
    idMeal: string
    strMeal: string
    strMealThumb: string
  }[]
}

type Action = {
  updateResults: (res: State['results']) => void
}

const useResultStore = create<State & Action>((set) => (
  {
    results: [],
    updateResults: (res) => set((state) => ({...state, results: [...res]})),
  }
));


export default useResultStore;