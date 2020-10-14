import {reset} from 'redux-form';
const SET_FILTER_NEWS = 'SET_FILTER_NEWS'
const SET_HANDLE_INPUT = 'SET_HANDLE_INPUT'
const ADD_NEWS_PENDING = 'ADD_NEWS_PENDING'
const ADD_NEWS_SHOW='ADD_NEWS_SHOW'
const DELETE_PANDING_NEWS='DELETE_PANDING_NEWS'



let initialState = {
   showNews:[
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        date: '19.09.2020'
        },
        {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        date: '19.09.2020'
        },
        {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        date: '19.09.2020'
        },
    ],
    searchShowNews:[],
    newsPending: [],
   handleInput: ''
}

const newsReduce =(state = initialState, action)=>{
    
    switch(action.type) {
        
        case SET_FILTER_NEWS:{
            
            if (action.even === '') {
                return {...state}
            }
             const newArr = action.arr.filter((item) => {
                return item.body.toLowerCase().indexOf(action.even.toLowerCase()) > -1
            })
            return {...state, searchShowNews: newArr}
        }
        case SET_HANDLE_INPUT:{
            
            return {
                ...state, handleInput: action.event
            }
        }
        case ADD_NEWS_PENDING:{
            
            return {
                ...state, newsPending: [...state.newsPending,action.obj]
                
            }
        }
        case ADD_NEWS_SHOW:{
            
            return {
                ...state, showNews: [action.objNews, ...state.showNews]
                
            }
        }
        case DELETE_PANDING_NEWS:{
            
            return {
                ...state,
                newsPending: state.newsPending.filter(e=>e.id !== action.id)
                
            }
        }
        
        
        default:
            return state
    }
    
}

export const setFilterNews = (arr,even) => ({type: SET_FILTER_NEWS, arr, even})
export const setHandleInput = event => ({type: SET_HANDLE_INPUT, event})
export const addNewsPending = obj => ({type: ADD_NEWS_PENDING, obj})
export const addNewsShow = objNews => ({type: ADD_NEWS_SHOW, objNews})
export const deletePandingNews = (id) => ({type: DELETE_PANDING_NEWS, id})

export const filterNews = (arr, e) => (dispatch) => {
    return (dispatch(setFilterNews(arr, e)),dispatch(setHandleInput(e)))
 }
let idCount = 5
export const getNewsPending =(obj)=>(dispatch) =>{
    const setDate = new Date().toLocaleDateString()
    obj['date']=setDate
    obj['id']=idCount++
    return (dispatch(addNewsPending(obj)), dispatch(reset('addNews')))
}

export const succsesNewsShow = (arr, id) => (dispatch) => {
    arr.map((el, index) => {

        if (el.id === id) {
            return dispatch(addNewsShow(el), arr.splice(index, 1))
        } return null

    }) 
        
}
// export const deletePandingNews = (arr, id) => (dispatch) => {
//     arr.map((el, index) => {

//         if (el.id === id) {
//             return dispatch(arr.splice(index, 1),editPandingNews(arr))
//         } return null

//     }) 
   
// }

 
export default newsReduce