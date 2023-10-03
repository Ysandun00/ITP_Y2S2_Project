import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Loginpage from './scenes/Loginpage'
import Homepage from './scenes/Homepage'
import AmbulanceDashboard from './scenes/AmbulanceDashboard'
import EmployeeManagerDashboard from './scenes/EmployeeManagerDashboard'
import InventoryDashboard from './scenes/InventoryDashboard'
import LaboratoryDashboard from './scenes/LaboratoryDashboard'
import PharmacyDashboard from './scenes/PharmacyDashboard'
import ProfilePage from './scenes/ProfilePage'
import WardManagerDashboard from './scenes/WardManagerDashboard'
import ServicesPage from './scenes/ServicesPage'
import VideoRequestForm from './scenes/VideoRequestForm'
import RoomPage from './scenes/VideoRoom'
import VideoUI from './scenes/VideoConference'
import ELogin from './scenes/WardManagerDashboard/Login'
import About from './scenes/WardManagerDashboard/About'
import YA from './scenes/WardManagerDashboard/create_a_ward'
import Eview from './scenes/WardManagerDashboard/viewdetails'
import Epaitentinfor from './scenes/WardManagerDashboard/create_pinfor'
import WardDetails from './scenes/WardManagerDashboard/wardDetails'
import Pview from './scenes/WardManagerDashboard/pviewdetails'
import Pdetails from './scenes/WardManagerDashboard/paitentDetails'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={ <Loginpage /> } />
                    <Route path='/AmbulanceDashboard' element={<AmbulanceDashboard />} />
                    <Route path='/EmployeeManagerDashboard' element={<EmployeeManagerDashboard />} />
                    <Route path='/InventoryDashboard' element={<InventoryDashboard />} />
                    <Route path='/LaboratoryDashboard' element={<LaboratoryDashboard />} />
                    <Route path='/PharmacyDashboard' element={<PharmacyDashboard />} />
                    <Route path='/ProfilePage' element={<ProfilePage />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/wardcreate' element={<YA />} />
                    <Route path='/ELogin' element={<ELogin />} />
                    <Route path='/view' element={<Eview/>} />
                    <Route path='/pcreate' element={<Epaitentinfor/>} />
                    <Route path='/pview' element={<Pview/>} />
                    <Route path='/ServicesPage' element={<ServicesPage/>}/>
                    <Route path='/VideoRequestForm' element={<VideoRequestForm/>}/>
                    <Route path='/VideoUI' element={<VideoUI/>}/>
                    <Route path='/room/:roomID' element={<RoomPage/>}/>
                    <Route path='/wardDetails' element={<WardDetails />} />
                    <Route path='/paitentdetails' element={<Pdetails />} />
                    
                </Routes>
            </BrowserRouter>            
        </div>
    );
}

export default App;

//Tharaka source code
// import Navbar from "./components/navbar";
// import Home  from "./components/home";
// import Footer from "./components/footer";
// import Loginpage from "./scenes/Loginpage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routers>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//       </Routers>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
