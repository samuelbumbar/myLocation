import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import LocationsList from './LocationList'
import AddLocationModal from './AddLocationModal'
import EditLocationModal from './EditLocationModal'
import DefaultModal from './DefaultModal'
import { startRemoveLocation } from '../../redux-store/actions/locations'
import LocationListFilters from './LocationListFilters'

const LocationsPage = ({ startRemoveLocation }) => {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenDefaultModal, setIsOpenDefaultModal] = useState(false)
    const [locationId, setLocationId] = useState(undefined)
    const [operationType, setOperationType] = useState(undefined)

    const toggleAddModal = () => setIsOpenAddModal(!isOpenAddModal)

    const toggleEditModal = () => {
        if (isOpenEditModal && locationId)
            setLocationId(undefined)

        setIsOpenEditModal(!isOpenEditModal)
    }

    const toggleDefaultModal = () => {
        if (isOpenDefaultModal && locationId)
            setLocationId(undefined)

        setIsOpenDefaultModal(!isOpenDefaultModal)
    }

    const elementSelected = (id) => setLocationId(id)

    const editButtonClickedCallback = () => {
        if (operationType === undefined)
            setOperationType('EDIT')
        else
            setOperationType(undefined)
    }

    const removeButtonClickedCallback = () => {
        if (operationType === undefined)
            setOperationType('REMOVE')
        else
            setOperationType(undefined)
    }

    useEffect(() => {
        if (!locationId)
            return

        switch (operationType) {
            case 'EDIT': {
                toggleEditModal()
                break
            }

            case 'REMOVE': {
                startRemoveLocation({ id: locationId })
                setLocationId(undefined)
                break
            }

            default: {
                if (locationId)
                    toggleDefaultModal()
                break
            }
        }
    }, [locationId]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Header addButtonClickedCallback={toggleAddModal} editButtonClickedCallback={editButtonClickedCallback} removeButtonClickedCallback={removeButtonClickedCallback} />
            <AddLocationModal open={isOpenAddModal} toggleModal={toggleAddModal} />
            <EditLocationModal open={isOpenEditModal} toggleModal={toggleEditModal} locationId={locationId} />
            <DefaultModal open={isOpenDefaultModal} toggleModal={toggleDefaultModal} locationId={locationId} />
            <LocationListFilters />
            <LocationsList elementSelectedCallback={elementSelected} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveLocation: (data) => dispatch(startRemoveLocation(data))
})

export default connect(undefined, mapDispatchToProps)(LocationsPage)