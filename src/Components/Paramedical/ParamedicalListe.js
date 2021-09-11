import ParamedicalItem from './ParamedicalItem'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'


import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

import {Container} from 'react-bootstrap'


const ParamedicalListe = ({paramedicals, searchCondition}) => {
    const [doneFiltre, setDoneFiltre] = useState(false)
    const list = useSelector(state => state.pmd.paramedicallist)
    console.log(list)

    return (
        <div>
            <Breadcrumbs maxItems={5} aria-label="breadcrumb"style={{fontSize:"15px"}}>
            <Link color="inherit" href="/Home">
                <HomeIcon style={{fontSize:"17px"}}  variant="top"/>  Home
            </Link>
            <Link color="inherit" href="/Pharmacy">
            Paramedical
            </Link>
          </Breadcrumbs>

          <Container style={{display:"flex", flexWrap:"wrap"}}>
            {list.filter((item)=>item.nomPD.toLowerCase().includes(searchCondition) )
            .map(item=>(
                
                <ParamedicalItem item={item} />
            ))}</Container>
        </div>
    )
}

export default ParamedicalListe
