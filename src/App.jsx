import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/indexStore';
import Home from './components/home/indexHome';

function App() {
    return (
      <Provider store={store} >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    )
}

export default App
