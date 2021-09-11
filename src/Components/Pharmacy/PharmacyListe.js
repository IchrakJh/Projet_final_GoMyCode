import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import PharmacyItem from './PharmacyItem'
import { Tabs, Tab, Table, Form,Container, Button, Row, Col, Navbar, Nav, Modal} from 'react-bootstrap'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';


const PharmacyListe = () => {
    const [doneFiltre, setDoneFiltre] = useState(false)
    const list = useSelector(state => state.py.pharmacylist)
    console.log(list)

    return (
        <div style={{paddingTop:"10px", paddingLeft:"20px", paddingBottom:"200px"}}>

          
          
        <Breadcrumbs maxItems={5} aria-label="breadcrumb"style={{fontSize:"15px"}}>
            <Link color="inherit" href="/Home">
                <HomeIcon style={{fontSize:"17px"}}  variant="top"/>  Home
            </Link>
            <Link color="inherit" href="/Pharmacy">
            Pharmacy
            </Link>
          </Breadcrumbs>

          <Container style={{display:"flex", flexWrap:"wrap"}}>
          <Tabs defaultActiveKey="Pharmacy" transition={false}
          id="noanim-tab-example" className="mb-3">
            <Tab eventKey="Pharmacy" title="Pharmacy">
            {list.filter(el=>el.typePy=="Jour").map(item=>(
                
                <PharmacyItem item={item} />
            ))}
            </Tab>
            <Tab eventKey="Night" title="Night Pharmacy">
            {list.filter(el=>el.typePy=="Nuit").map(item=>(
                
                <PharmacyItem item={item} />
            ))}
            </Tab>
            <Tab eventKey="Planning" title="Planning hebdomadaire">
            <div style={{paddingTop:"100px", paddingLeft:"20px", paddingBottom:"200px",tabSize:"50px"}}>
                <Table striped bordered hover variant="dark">
                    <thead>
    <tr>
      
      <th>Jour</th>
      <th>Horaire pause</th>
      <th>Adresse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lundi</td>
      <td>13h-16h</td>
      <td>Adresse</td>
      
    </tr>
    <tr>
    <td>Mardi</td>
      <td>13h-16h</td>
      <td>Adresse</td>
      
    </tr>
    <tr>
    <td>Mercredi</td>
      <td>13h-16h</td>
      <td>Adresse</td>
      
    </tr>
    <tr>
    <td>Jeudi</td>
      <td>13h-16h</td>
      <td>Adresse</td>
      
    </tr>
    <tr>
    <td>Vendredi</td>
      <td>13h-16h</td>
      <td>Adresse</td>
      
    </tr>
    
              </tbody>
              </Table>
              <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Jour</th>
      <th>Horaire pause</th>
      <th>Adresse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>samedi soir</td>
      <td>temps partiel</td>
      <td>Adresse</td>
      
    </tr>
    <tr>
    <td>Dimanche</td>
      <td>Temps plein</td>
      <td>Adresse</td>
      
    </tr>
    
    
  </tbody>



</Table>  </div>

  </Tab></Tabs>

            
            </Container>
        </div>
    )
}

export default PharmacyListe
