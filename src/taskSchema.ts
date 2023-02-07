import * as Yup from 'yup'

export const taskSchema = Yup.object().shape({
    text: Yup.string().required('Please enter a task'),
    day: Yup.string().required('Please enter day/time')
})