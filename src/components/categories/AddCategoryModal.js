import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import { startAddCategory } from '../../redux-store/actions/categories'
import CategoryForm from './CategoryForm'

const AddCategoryModal = ({ open, toggleModal, startAddCategory }) => {
    const onSubmit = (category) => {
        startAddCategory(category)
        toggleModal()
    }

    return (
        <Modal
            open={open}
            onClose={toggleModal}
            styles={{
                modal: {
                    maxWidth: "unset",
                    width: "70%",
                    padding: "unset",
                    border: 0,
                    background: "#EDE5E1"
                },
                overlay: {
                    background: "rgba(0, 0, 0, 0.5)"
                }
            }}
            center
        >
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Category</h1>
                    </div>
                </div>
                <div className="content-container">
                    <CategoryForm onSubmitCallback={onSubmit} />
                </div>
            </div>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddCategory: (category) => dispatch(startAddCategory(category))
})

export default connect(undefined, mapDispatchToProps)(AddCategoryModal)