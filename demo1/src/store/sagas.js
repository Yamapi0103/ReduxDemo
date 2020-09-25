import { takeEvery,put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreators'
// generator
function* mySaga () {
  yield takeEvery(GET_MY_LIST, getList)
}
function* getList () {
  let url = 'https://run.mocky.io/v3/f96bcda8-791f-4fa0-a8fb-cf8391cbe346' // https://designer.mocky.io/
  const res = yield axios.get(url)
  const action = getListAction(res.data)
  yield put(action)
}
export default mySaga