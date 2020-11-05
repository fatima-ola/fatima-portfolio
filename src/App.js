import './App.css';
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './components/landingPage'

// import Layout from './components/layout'
// import Sidenav from './components/sidenav'



function App() {
  return (
    <div >
      <BrowserRouter>
        <LandingPage />
        {/* <Sidenav /> */}
        {/* <Layout /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
