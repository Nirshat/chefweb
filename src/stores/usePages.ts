import { create } from "zustand";


type State = {
  no: number
}

type Action = {
  updatePage: (pageno: State['no']) => void
}

const usePages = create<State & Action>((set) => (
  {
    no: 0,
    updatePage: (pageno) => set((state) => ({...state, no:pageno}))
  }
));

export default usePages