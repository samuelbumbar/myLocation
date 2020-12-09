import { connect } from 'react-redux';
import selectLocations from '../../redux-store/selectors/locations';
import LocationsListItem from "./LocationListItem"

const LocationsList = ({ locations, elementSelectedCallback }) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Locations</div>
            <div className="show-for-desktop">Location</div>
            <div className="show-for-desktop">Category</div>
        </div>
        <div className="list-body">
            {
                locations.length === 0 ?
                    (
                        <div className="list-item">No locations available</div>
                    ) : (
                        locations.map(location => (<LocationsListItem key={location.id} elementSelectedCallback={elementSelectedCallback} {...location} />))
                    )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    locations: selectLocations(
        state.locations ? Object.values(state.locations) : [],
        state.categories ? Object.values(state.categories) : [],
        state.filters || {}
    )
        .map(location => ({
            ...location,
            category: state.categories[location.category]
        }))
})

export default connect(mapStateToProps)(LocationsList)