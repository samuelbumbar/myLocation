import { useEffect } from 'react';
import { Provider } from 'react-redux'
import { startSetCategories } from './redux-store/actions/categories';
import { startSetLocations } from './redux-store/actions/locations';
import configureStore from './redux-store/store/configureStore';
import AppRouter from './router/AppRouter';

function App() {
  const store = configureStore()

  useEffect(() => {
    store.dispatch(startSetCategories())
    store.dispatch(startSetLocations())
  }, [store])

  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App;
