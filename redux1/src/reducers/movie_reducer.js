//stage 3> action taking to reducer

export default function(state=null,action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        default:
            return state;
    }
}