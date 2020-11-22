//stage 2 > action and its return 2 things (type,payload)

export function moviesList(id){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Avengers'},
            {id:2,name:'Jab We Met'},
            {id:3,name:'Death Race'}
        ]
    }
}