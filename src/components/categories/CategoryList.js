import { connect } from 'react-redux';
import CategoriesListItem from "./CategoryListItem"

const CategoriesList = ({ categories, elementSelectedCallback }) => (
    <div className="content-container">
        <div className="list-header">
            <div>Category</div>
        </div>
        <div className="list-body">
            {
                categories.length === 0 ?
                    (
                        <span>No categories available</span>
                    ) : (
                        categories.map((category) => (<CategoriesListItem key={category.id} elementSelectedCallback={elementSelectedCallback} {...category} />))
                    )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    categories: Object.values(state.categories || {})
})

export default connect(mapStateToProps)(CategoriesList)