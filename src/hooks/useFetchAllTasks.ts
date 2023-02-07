import { api } from "../api"

const useFetchAllTasks = () => {

  const fetchTasks = async () => {
    const res = await api.get('/tasks')
    return res.data
  } 
  return { fetchTasks }
}

export default useFetchAllTasks