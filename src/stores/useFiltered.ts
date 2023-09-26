import { create } from "zustand";


type State = {
  category: string
  paliwanag: string
  cover: string
}

type Action = {
  updateCategory: (name: State['category']) => void
  updatePaliwanag: (p:State['paliwanag']) => void
  updateCover: (thumb: State['cover']) => void
}

const useFiltered = create<State & Action>((set) => (
  {
    category: '',
    paliwanag: '',
    cover: '',
    updateCategory: (name) => set((state) => ({...state, category: name})),
    updatePaliwanag: (p) => set((state) => ({...state, paliwanag:p})),
    updateCover: (thumb) => set((state) => ({...state, cover:thumb })),
  }
))

export default useFiltered