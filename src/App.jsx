
import './App.css'
import { ChatBox } from './components/chatbox'
import { Header } from './components/header'
import { MainScreen } from './screen/mainScreen'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import { MobileMainScreen } from './screen/MobileScreen'
function App() {
 

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainScreen/>}/>
        <Route path='/user/:id/:userId' element={<MainScreen/>}/>
        <Route path='/user-mobile-view/:id' element={<MobileMainScreen/>}/>

      </Routes>
     </Router>
    </>
  )
}

export default App
