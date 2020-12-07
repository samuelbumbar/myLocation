const filtersReducerDefaultState = { sortBy: '', groupBy: '' }

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            };

        case 'UNSORT':
            return {
                ...state,
                sortBy: ''
            }
        
        case 'GROUP_BY_CATEGORY':
            return {
                ...state,
                groupBy: 'category'
            };

        case 'UNGROUP':
            return {
                ...state,
                groupBy: ''
            }

        default:
            return state
    }
}

export default filtersReducer