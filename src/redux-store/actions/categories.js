// NOTE:
// There had to be added the ID property because the category couldn't be edited and also associated to a location on other way

import { v4 as uuid } from 'uuid';

const addCategory = (category) => ({
    type: 'ADD_CATEGORY',
    category: {
        ...category,
        id: uuid()
    }
})

export const startAddCategory = (category = {}) => {
    return (dispatch, getState) => {
        dispatch(addCategory(category))
        const categoriesState = JSON.stringify(getState().categories)
        localStorage.setItem('categories', categoriesState)
    }
}

const removeCategory = ({ id }) => ({
    type: 'REMOVE_CATEGORY',
    id
})

export const startRemoveCategory = ({ id } = {}) => {
    return (dispatch, getState) => {
        dispatch(removeCategory({ id }))
        const categoriesState = JSON.stringify(getState().categories)
        localStorage.setItem('categories', categoriesState)
    }
}

const editCategory = (id, updates) => ({
    type: 'EDIT_CATEGORY',
    id,
    updates
})

export const startEditCategory = (id, updates) => {
    return (dispatch, getState) => {
        dispatch(editCategory(id, updates))
        const categoriesState = JSON.stringify(getState().categories)
        localStorage.setItem('categories', categoriesState)
    }
}

const setCategories = (categories = {}) => ({
    type: 'SET_CATEGORIES',
    categories
})

export const startSetCategories = () => {
    return (dispatch) => {
        const localStorageCategories = JSON.parse(localStorage.getItem('categories'))
        dispatch(setCategories(localStorageCategories))
    }
}
