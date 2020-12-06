import reducer from '../reducers/main_reducer';

describe('Reducer testing',() => {
    it('Should return initial state',() => {
        expect(JSON.stringify(reducer(undefined,{})))
        .toEqual(JSON.stringify({
            article:{},
            gallery:{}
        }))
    })

    it('Reducer With actions',() => {
        let state={
            article:[],
            gallery:[]
        }

        state= reducer(state,{action:'GET_ARTICLE'})

        expect(state).toEqual({
            article:[],
            gallery:[]
        })
    })
})