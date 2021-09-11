import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {Form} from 'react-bootstrap'
import DoctorslItem from './DoctorsItem'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

import {Container} from 'react-bootstrap'


const DoctorsListe = ({filterD}) => {
    const [doneFiltre, setDoneFiltre] = useState()
    const list = useSelector(state => state.dt.doctorlist)
    console.log(list)

    return (
        <div style={{paddingTop:"10px", paddingLeft:"20px", paddingBottom:"200px"}}>

          
          
        <Breadcrumbs maxItems={5} aria-label="breadcrumb"style={{fontSize:"15px"}}>
            <Link color="inherit" href="/Home">
                <HomeIcon style={{fontSize:"17px"}}  variant="top"/>  Home
            </Link>
            <Link color="inherit" href={filterD} >
                {filterD}
            </Link>
          </Breadcrumbs>

          <Container style={{display:"flex", flexWrap:"wrap"}}>
            

            {list.filter(el=>el.DomaineD==filterD).map(item=>(
                
                <DoctorslItem item={item} />
            ))}</Container>
        </div>
    )
}

export default DoctorsListe
