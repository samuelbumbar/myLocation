import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import CategoriesList from './CategoryList'
import AddCategoryModal from './AddCategoryModal'
import EditCategoryModal from './EditCategoryModal'
import { startRemoveCategory } from '../../redux-store/actions/categories'
import { startRemoveLocation } from '../../redux-store/actions/locations'

const CategoriesPage = ({ locations, startRemoveCategory, startRemoveLocation }) => {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [categoryId, setCategoryId] = useState(undefined)
    const [operationType, setOperationType] = useState(undefined)

    const toggleAddModal = () => setIsOpenAddModal(!isOpenAddModal)
    const toggleEditModal = () => {
        if (isOpenEditModal && categoryId)
            setCategoryId(undefined)
        
        setIsOpenEditModal(!isOpenEditModal)
    }
    const elementSelected = (id) => setCategoryId(id)

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
        if (!categoryId)
            return

        switch (operationType) {
            case 'EDIT': {
                toggleEditModal()
                break
            }

            case 'REMOVE': {
                startRemoveCategory({ id: categoryId })
                locations.forEach((location) => {
                    if (location.category === categoryId)
                        startRemoveLocation({ id: location.id })
                })
                setCategoryId(undefined)
                break
            }

            default: break
        }
    }, [categoryId]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Header addButtonClickedCallback={toggleAddModal} editButtonClickedCallback={editButtonClickedCallback} removeButtonClickedCallback={removeButtonClickedCallback} />
            <AddCategoryModal open={isOpenAddModal} toggleModal={toggleAddModal} />
            <EditCategoryModal open={isOpenEditModal} toggleModal={toggleEditModal} categoryId={categoryId} />
            <CategoriesList elementSelectedCallback={elementSelected} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    locations: Object.values(state.locations)
})

const mapDispatchToProps = (dispatch) => ({
    startRemoveCategory: (data) => dispatch(startRemoveCategory(data)),
    startRemoveLocation: (data) => dispatch(startRemoveLocation(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage)
