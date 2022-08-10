import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './Routes/Routes';
import AuthProvider from './Pages/Context/AuthContext'

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
