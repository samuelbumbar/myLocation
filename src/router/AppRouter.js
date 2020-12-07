import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import CategoriesPage from '../components/categories/CategoriesPage'
import LocationsPage from '../components/locations/LocationsPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/categories" component={CategoriesPage} exact={true} />
                <Route path="/locations" component={LocationsPage} exact={true} />
                <Route exact path="/">
                    <Redirect to="/categories" />
                </Route>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter