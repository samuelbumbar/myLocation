import { useState } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

const DefaultModal = ({ open, toggleModal, location }) => {
    const [showDetails, setShowDetails] = useState(false)

    const showDetailsButtonClicked = () => setShowDetails(!showDetails)

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
                <div className="content-container">
                    <h2 onClick={showDetailsButtonClicked} className="page-header__element page-header__action">Show details</h2>
                    <div id="showDetails" style={{ display: showDetails ? "block" : "none" }}>
                        <label>Name</label>
                        <h3 className="page-header__action">{location.name}</h3>

                        <label>Address</label>
                        <h3 className="page-header__action">{location.address}</h3>

                        <label>Coordinates</label>
                        <h3 className="page-header__action">{location.x_coordinates}, {location.x_coordinates}</h3>

                        <label>Category</label>
                        <h3 className="page-header__action">{location.category}</h3>
                    </div>
                    <a className="page-header__element" href={`https://www.openstreetmap.org/#map=17/${location.x_coordinates}/${location.y_coordinates}`} target="_blank" rel="noreferrer">
                        <h2 className="page-header__action">View on map</h2>
                    </a>
                </div>
            </div>
        </Modal >
    )
}

const mapStateToProps = (state, props) => {
    const unprocessedLocation = state.locations ? state.locations[props.locationId] : undefined
    
    return {
        location: unprocessedLocation ? {
            ...unprocessedLocation,
            category: state.categories[unprocessedLocation.category].name
        } : {}
    }
}

export default connect(mapStateToProps)(DefaultModal)