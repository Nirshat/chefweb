import { create } from "zustand";


type State = {
  paliwanag: string
}

type Action = {
  updatePaliwanag: (p:State['paliwanag']) => void
}


// pag array ang ini-store mo sa localStorage, you will need to use JSON.stringify & JSON.parse()
// And you dont need JSON.stringify & JSON.parse if the data is just a string, number, boolean (not multiple data like array or object)

const useFiltered = create<State & Action>((set) => {
  return {
    paliwanag: localStorage.getItem('pKey') || '',
    updatePaliwanag: (p) => set((state) => {
      localStorage.setItem('pKey', p);
      return {...state, paliwanag:p};
    }),
  }
});

// also if a function returns an object, you can use 
// const action = create() => ({})
// const action = create() => {return {} }

export default useFiltered