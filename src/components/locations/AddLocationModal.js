import { connect } from "react-redux"
import Modal from 'react-responsive-modal'
import { startAddLocation } from '../../redux-store/actions/locations'
import LocationForm from './LocationForm'

const AddLocationModal = ({ open, toggleModal, startAddLocation }) => {
    const onSubmit = (location) => {
        startAddLocation(location)
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
                        <h1 className="page-header__title">Add Location</h1>
                    </div>
                </div>
                <div className="content-container">
                    <LocationForm onSubmitCallback={onSubmit} />
                </div>
            </div>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddLocation: (location) => dispatch(startAddLocation(location))
})

export default connect(undefined, mapDispatchToProps)(AddLocationModal)