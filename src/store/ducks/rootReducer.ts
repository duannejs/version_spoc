import { combineReducers } from 'redux'
import user from './user/reducer'
import licences from './licences/reducer'

const reducers = combineReducers({
    user,
    licences
})

export default reducers
