import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const addItemAction = () => ({
  type: ADD_ITEM,
})
export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    let url = 'https://run.mocky.io/v3/f96bcda8-791f-4fa0-a8fb-cf8391cbe346' // https://designer.mocky.io/
    axios.get(url).then((res) => {
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
    })
  }
}