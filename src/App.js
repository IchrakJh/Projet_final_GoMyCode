import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnimattionBar from './Components/AnimattionBar/AnimattionBar';
import FooterBar from './Components/FooterBar/FooterBar';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ProfilUser from './Components/ProfilUser/ProfilUser';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ParamedicalListe from './Components/Paramedical/ParamedicalListe'
import ParapharmacyListe from './Components/Parapharmacy/ParapharmacyListe';
import PharmacyListe from'./Components/Pharmacy/PharmacyListe'
import HospitalListe from './Components/Hospital/HospitalListe';
import DoctorsListe from './Components/Doctors/DoctorsListe';
import OpticianListe from './Components/Optician/OpticianListe';
import {useState} from 'react';



function App() {
  const [searchCondition, setSearchCondition] = useState(" ");

  return (
    
    <BrowserRouter>
    <div className="App">
    
        <NavigationBar/>
        
      
      
    </div>
    <div className="main" style={{background:"lightgray" }}>
    <Switch>

      <Route path="/Contact"><ProfilUser/></Route>
      <Route path="/Home"><AnimattionBar/></Route>
      
      <Route path="/Public"><HospitalListe filterH="Public"/></Route>
      <Route path="/Private"><HospitalListe filterH="Private"/></Route>

      
      <Route path="/Cardiologist"><DoctorsListe filterD="Cardiologist"/></Route>
      <Route path="/Dentist"><DoctorsListe filterD="Dentist"/> </Route>
      <Route path="/Dermatologist"><DoctorsListe filterD="Dermatologist"/></Route>
      <Route path="/General"><DoctorsListe filterD="General"/></Route>
      <Route path="/Gynecologist"><DoctorsListe filterD="Gynecologist"/> </Route>
      
      <Route path="/Ophthalmologist"><DoctorsListe filterD="Ophthalmologist"/></Route>
      <Route path="/Orthopedist"><DoctorsListe filterD="Orthopedist"/></Route>
      <Route path="/Venereologist"><DoctorsListe filterD="Venereologist"/></Route>
      <Route path="/Pediatrician"><DoctorsListe filterD="Pediatrician"/></Route>
      <Route path="/Psychiatrist"><DoctorsListe filterD="Psychiatrist"/> </Route>
      <Route path="/Radiologist"><DoctorsListe filterD="Radiologist"/></Route>
      <Route path="/Surgeon"><DoctorsListe filterD="Surgeon"/></Route>
      <Route path="/Urologist"><DoctorsListe filterD="Urologist"/> </Route>
      
      
      
      


      <Route path="/Pharmacy"><PharmacyListe/></Route>
      <Route path="/Parapharmacy"><ParapharmacyListe/></Route>
      <Route path="/Paramedical">
        <ParamedicalListe 
        searchCondition={searchCondition} 
        setSearchCondition={setSearchCondition} 
          />
      </Route>
      <Route path="/Optician"> <OpticianListe/> </Route>

      <Route path="/ProfilUser"> <ProfilUser/> </Route>

      <Route path="*">404 NOT FOUND !</Route>


    </Switch>
    </div>
    
    <FooterBar/>
    </BrowserRouter>
  );
}

export default App;
