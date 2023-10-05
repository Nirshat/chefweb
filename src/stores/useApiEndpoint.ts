import {create} from 'zustand'


const useEndpoint = create(() => (
  {
    endpoint: import.meta.env.VITE_THEMEALDB_URL,
  }
))

export default useEndpoint