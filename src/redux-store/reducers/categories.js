// NOTE:
// I've used this approach because it is faster, as it is not using iteration

const categoriesDefaultState = []

const categoriesReducer = (state = categoriesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY': {
            // return [
            //     ...state,
            //     action.category
            // ]
            let state_copy = { ...state }
            state_copy[action.category.id] = action.category
            return state_copy
        }

        case 'REMOVE_CATEGORY': {
            // let state_copy = state.slice()
            // const index = state_copy.indexOf(action.category)
            // state_copy.splice(index, 1)
            // return state_copy
            let state_copy = { ...state }
            delete state_copy[action.id]
            return state_copy
        }

        case 'EDIT_CATEGORY': {
            // return state.map(category => (
            //     category.id === action.id
            //         ? { ...category, ...updates }
            //         : category
            // ))
            return {
                ...state,
                [action.id]: { ...state[action.id], ...action.updates, id: action.id }
            }
        }

        case 'SET_CATEGORIES':
            return action.categories

        default:
            return state
    }
}

export default categoriesReducer