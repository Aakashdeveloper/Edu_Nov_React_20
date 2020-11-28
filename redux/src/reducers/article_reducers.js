export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST':
            return{...state,latestNews:action.payload}
        case 'GET_ARTICLE':
            return{...state,articleNews:action.payload}
        case 'SELECTED_NEWS':
            return{...state,selected:action.payload}
        default:
            return state
    }
}