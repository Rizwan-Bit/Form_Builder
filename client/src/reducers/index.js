import actions from '../actions/types'

const initState = {
    data: [],
    form: {
        name: '',
        questions: []
    }
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actions.GET_FORMS:
            return {
                ...state,
                data: action.payload
            }
        case actions.GET_FORM:
            return {
                ...state,
                form: {
                    name: action.payload.name,
                    questions: action.payload.questions
                }
            }
        case actions.SUBMIT_FORM:
            return {
                ...state
            }
        case actions.ADD_FORM:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;