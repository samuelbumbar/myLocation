// NOTE:
// There had to be added the ID property because the location coordinates, or name couldn't be edited if they were used as an element key

import { v4 as uuid } from 'uuid';

const addLocation = (location) => ({
    type: 'ADD_LOCATION',
    location: {
        ...location,
        id: uuid()
    }
})

export const startAddLocation = (location = {}) => {
    return (dispatch, getState) => {
        dispatch(addLocation(location))
        const locationsState = JSON.stringify(getState().locations)
        localStorage.setItem('locations', locationsState)
    }
}

const removeLocation = ({ id }) => ({
    type: 'REMOVE_LOCATION',
    id
})

export const startRemoveLocation = ({ id } = {}) => {
    return (dispatch, getState) => {
        dispatch(removeLocation({ id }))
        const locationsState = JSON.stringify(getState().locations)
        localStorage.setItem('locations', locationsState)
    }
}

const editLocation = (id, updates) => ({
    type: 'EDIT_LOCATION',
    id,
    updates
})

export const startEditLocation = (id, updates) => {
    return (dispatch, getState) => {
        dispatch(editLocation(id, updates))
        const locationsState = JSON.stringify(getState().locations)
        localStorage.setItem('locations', locationsState)
    }
}

const setLocations = (locations = {}) => ({
    type: 'SET_LOCATIONS',
    locations
})

export const startSetLocations = () => {
    return (dispatch) => {
        const localStorageLocations = JSON.parse(localStorage.getItem('locations'))
        dispatch(setLocations(localStorageLocations))
    }
}
