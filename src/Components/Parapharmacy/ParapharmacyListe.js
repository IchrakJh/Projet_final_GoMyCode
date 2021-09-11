import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import ParapharmacyItem from './ParapharmacyItem'
import { Form,Container, Button, Row, Col, Navbar, Nav, Modal} from 'react-bootstrap'
import {useDispatch } from 'react-redux'
import { DeleteTodoPP,EditTodoPP, AddTodoPP } from '../../redux/Slices/ParaPharmacySlice'
import {useParams} from 'react-router-dom'


import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';


const ParapharmacyListe = ({item}) => {
const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [newItem,setNewItem] = useState({
        idPy:Math.random(10000),
        nomPP:"",
        imgPP:"",
        adressPP:"",
        telphPP:"",
        faxPP:"",
        gsmPP:"",
        sitePP:"",
        mailPP:"",
    })

    const handleAdd =()=>{

        {
            dispatch(AddTodoPP(newItem));
            setTimeout(()=>{
                setShow(false);
            },1500)
        };}

        
    const [doneFiltre, setDoneFiltre] = useState(false)
        
    const [newDescription, setNewDescription] = useState("")
    

    
    const list = useSelector(state => state.ppy.parapharmacylist)
    console.log(list)



    return (
        
        <div style={{paddingTop:"10px", paddingLeft:"20px", paddingBottom:"200px"}}>
        

        <Button variant="warning" style={{marginLeft:"900px"}} onClick={()=>setShow(true)}>Add New Parapharmacy</Button>
                <Modal show={show} onHide={()=> setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Parapharmacy to Add</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                        <Form>
                <Form.Label>NOM </Form.Label>
                <Form.Control type="text" onChange={(e)=>setNewItem({...newItem, nomPP:e.target.value})}
                type="text" placeholder="NOM"/>
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image" onChange={(e)=>setNewItem({...newItem, imgPP:e.target.value})}/>
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="Adresse" onChange={(e)=>setNewItem({...newItem, adressPP:e.target.value})}
                type="text" placeholder="adresse"/>
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="text" placeholder="Telephone" onChange={(e)=>setNewItem({...newItem, telphPP:e.target.value})}/>

            </Form>

            </Modal.Body>
            <Modal.Footer>
                            <Button variant="secondary" onClick={()=> setShow(false)}>
                            Close</Button>
                            <Button variant="primary" onClick={handleAdd}>
                            Add Parapharmacy</Button>
                        </Modal.Footer>
                </Modal>
       
        
        
            <Breadcrumbs maxItems={5} aria-label="breadcrumb"style={{fontSize:"15px"}}>
    <Link color="inherit" href="/Home">
        <HomeIcon style={{fontSize:"17px"}}  variant="top"/>  Home
    </Link>
    <Link color="inherit" href="/Parapharmacy" >
    Parapharmacy</Link></Breadcrumbs>
            <Container style={{display:"flex", flexWrap:"wrap",matginTop:"100px"}}>

            {list.map(item=>(
                
                <ParapharmacyItem item={item} />
            ))}</Container>
                  
        </div>
    )
}

export default ParapharmacyListe
