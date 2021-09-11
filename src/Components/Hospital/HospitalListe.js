import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import HospitalItem from './HospitalItem'
import {Form} from 'react-bootstrap'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

import {Container} from 'react-bootstrap'


const HospitalListe = ({filterH}) => {
    const [doneFiltre, setDoneFiltre] = useState("privte")
    const list = useSelector(state => state.hpl.hospitallist)
    console.log(list)


    


    return (
        <div style={{paddingTop:"10px", paddingLeft:"20px", paddingBottom:"200px"}}>

          
          
          <Breadcrumbs maxItems={5} aria-label="breadcrumb"style={{fontSize:"15px"}}>
              <Link color="inherit" href="/Home">
                  <HomeIcon style={{fontSize:"17px"}}  variant="top"/>  Home
              </Link>
              <Link color="inherit" href={filterH} >
                  {filterH}
              </Link>
            </Breadcrumbs>
  
            <Container style={{display:"flex", flexWrap:"wrap"}}>
            {list.filter(el=>el.secteurH==filterH).map(item=>(
                
                
                <HospitalItem item={item} />

            ))}</Container>
        </div>
    )
}

export default HospitalListe
