import { Provider } from 'react-redux'
import './App.css'
import StudentCrudByRedux from './components/StudentCrudByRedux'
import { store } from './app/Store'


function App() {

  return (
    <>
      <Provider store={store}>
        <StudentCrudByRedux />
      </Provider>
    </>
  )
}

export default App
