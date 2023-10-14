import { create } from "zustand";


type State = {
  category: string
  paliwanag: string
}

type Action = {
  updateCategory: (name: State['category']) => void
  updatePaliwanag: (p:State['paliwanag']) => void
}


// pag array ang ini-store mo sa localStorage, you will need to use JSON.stringify & JSON.parse()
// And you dont need JSON.stringify & JSON.parse if the data is just a string, number, boolean (not multiple data like array or object)

const useFiltered = create<State & Action>(() => {
  return {
    category: localStorage.getItem('categoryKey') || '' ,
    paliwanag: localStorage.getItem('pKey') || '',
    updateCategory: (name) => {
      localStorage.setItem('categoryKey', name);
    },
    updatePaliwanag: (p) => {
      localStorage.setItem('pKey', p);
    },
  }
});

// also if a function returns an object, you can use 
// const action = create() => ({})
// const action = create() => {return {} }

export default useFiltered