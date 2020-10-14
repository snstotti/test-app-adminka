const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
const ADMIN_LOGED_IN = 'ADMIN_LOGED_IN'
const USER_LOGED_IN = 'USER_LOGED_IN'



let initialState = {
    adminName: '',
    userName: '',
    userLoggedIn: false,
    adminLoggedIn: false,
    authError: ''
}

const appReduce =(state = initialState, action)=>{

    switch(action.type) {
      
        case SET_AUTH_ERROR:{
            
            return {
                ...state, authError: action.authError
            }
        }
        case ADMIN_LOGED_IN:{
            
            return {
                ...state, adminLoggedIn: action.loged , adminName: action.name
            }
        }
        case USER_LOGED_IN:{
            
            return {
                ...state, userLoggedIn: action.loged , userName: action.name
            }
        }
        
        default:
            return state
    }
    
}

export const setAuthError = authError => ({type: SET_AUTH_ERROR, authError})
export const adminLogedIn = (loged,name) => ({type: ADMIN_LOGED_IN, loged, name})
export const userLogedIn = (loged,name) => ({type: USER_LOGED_IN, loged, name})

export const initialize = (obj) => (dispatch) => {

    const test = { login: 'test', password: 'test' }
    const admin = { login: 'admin', password: 'admin' }
    if (obj.login === admin.login && obj.password === admin.password) {
        return dispatch(adminLogedIn(true, obj.login))
    } else if ((obj.login === test.login && obj.password === test.password)) {
        return dispatch(userLogedIn(true, obj.login))
    }
    else {
        return dispatch(setAuthError('Incorrect login or password'))
    }
 }

 export const logout = () => (dispatch) => {
     return (dispatch(userLogedIn(false,'')),dispatch(adminLogedIn(false,'')))
 }
   


export default appReduce