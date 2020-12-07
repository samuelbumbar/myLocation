import { connect } from 'react-redux'
import { sortByName, unsort, groupByCategory, ungroup } from '../../redux-store/actions/filters'

const LocationListFilters = ({ filters, sortByName, unsort, groupByCategory, ungroup }) => {
    const onSortChange = (e) => {
        if (e.target.value === 'name')
            sortByName()
        else
            unsort()
    }

    const onGroupChange = (e) => {
        if (e.target.value === 'category')
            groupByCategory()
        else
            ungroup()
    }

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <label>Sort by</label>
                    <select
                        className="select"
                        value={filters.sortBy}
                        onChange={onSortChange}
                    >
                        <option value="none">None</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <label>Group by</label>
                    <select
                        className="select"
                        value={filters.groupBy}
                        onChange={onGroupChange}
                    >
                        <option value="none">None</option>
                        <option value="category">Category</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    sortByName: () => dispatch(sortByName()),
    unsort: () => dispatch(unsort()),
    groupByCategory: () => dispatch(groupByCategory()),
    ungroup: () => dispatch(ungroup())
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListFilters)