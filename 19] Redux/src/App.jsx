import './App.css'
import CounterRedux from './components/CounterRedux'
import { store } from './app/Store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    </>
  )
}

export default App
