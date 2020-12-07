import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import { startEditLocation } from '../../redux-store/actions/locations'
import LocationForm from './LocationForm'

const EditLocationModal = ({ open, toggleModal, startEditLocation, location, locationId }) => {
    const onSubmit = (location) => {
        startEditLocation(locationId, location)
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
                        <h1 className="page-header__title">Edit Location</h1>
                    </div>
                </div>
                <div className="content-container">
                    <LocationForm location={location} onSubmitCallback={onSubmit} />
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state, props) => ({
    location: state.locations ? state.locations[props.locationId] : {}
})

const mapDispatchToProps = (dispatch) => ({
    startEditLocation: (id, location) => dispatch(startEditLocation(id, location))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditLocationModal)