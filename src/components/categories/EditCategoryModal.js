import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import { startEditCategory } from '../../redux-store/actions/categories'
import CategoryForm from './CategoryForm'

const EditCategoryModal = ({ open, toggleModal, startEditCategory, category, categoryId }) => {
    const onSubmit = (category) => {
        startEditCategory(categoryId, category)
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
                        <h1 className="page-header__title">Edit Category</h1>
                    </div>
                </div>
                <div className="content-container">
                    <CategoryForm category={category} onSubmitCallback={onSubmit} />
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state, props) => ({
    category: state.categories[props.categoryId]
})

const mapDispatchToProps = (dispatch) => ({
    startEditCategory: (id, category) => dispatch(startEditCategory(id, category))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryModal)