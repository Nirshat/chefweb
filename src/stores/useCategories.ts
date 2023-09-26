import { create } from "zustand";

type State = {
  categories: {
    idCategory: string
    strCategory: string
    strCategoryThumb: string
    strCategoryDescription: string
  }[]
}

type Actions = {
  fetch: (items: State['categories']) => void
}


const useCategories = create<State & Actions>((set) => (
  {
    categories: [],
    fetch: (items) => set((state) => ({...state, categories:[...items]}))
  }
));


export default useCategories