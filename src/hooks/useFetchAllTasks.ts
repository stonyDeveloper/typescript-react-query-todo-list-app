import React from 'react'
import axios from 'axios'

const useFetchAllTasks = () => {

  const fetchTasks = async () => {
    const res = await axios.get('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks')
    return res.data
  } 
  return { fetchTasks }
}

export default useFetchAllTasks