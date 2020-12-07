// NOTE:
// I've used this approach because it is faster, as it is not using iteration

const locationsDefaultState = []

const locationsReducer = (state = locationsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LOCATION': {
            // return [
            //     ...state,
            //     action.location
            // ]
            let state_copy = { ...state }
            state_copy[action.location.id] = action.location
            return state_copy
        }

        case 'REMOVE_LOCATION': {
            // let state_copy = state.slice()
            // const index = state_copy.indexOf(action.location)
            // state_copy.splice(index, 1)
            // return state_copy
            let state_copy = { ...state }
            delete state_copy[action.id]
            return state_copy
        }

        case 'EDIT_LOCATION': {
            // return state.map(location => (
            //     location.id === action.id
            //         ? { ...location, ...updates }
            //         : location
            // ))
            return {
                ...state,
                [action.id]: { ...state[action.id], ...action.updates, id: action.id }
            }
        }

        case 'SET_LOCATIONS':
            return action.locations
            
        default:
            return state
    }
}

export default locationsReducer