import React , {useSelector, useState} from 'react'

import { Form,Card, Button, Row, Col} from 'react-bootstrap'
import { DeleteTodoPP,EditTodoPP } from '../../redux/Slices/ParaPharmacySlice'
import {useParams} from 'react-router-dom'
import {useDispatch } from 'react-redux'



const ParapharmacyItem = ({item}) => {
    const dispatch = useDispatch()
    const [showEdit, setShowEdit] = useState(false)

    const [show, setShow] = useState(false);

  const handelDelet=()=>{
      dispatch(DeleteTodoPP({idPy:item.idPy}))
  }
const handelEdit=()=>{

    {
        dispatch(EditTodoPP({idPy:item.idPy,adressPP:showEdit }));
        setTimeout(()=>{
            setShow(false);
        },500)
    };}


  
    return (
      <div style={{paddingBottom:"20px", paddingTop:"30px"}}> 
      
          <Button onClick={()=>setShowEdit(!showEdit)}  className="btn btn-labeled btn-info"style={{width: "30px" , marginLeft:"86.5%"}}>
                <span className="btn-label" style={{color:"white"}}>
                    <i className="glyphicon glyphicon-refresh"></i>
                </span>
            </Button>
            <Button onClick={()=>handelDelet()} className="btn btn-labeled btn-danger"style={{width: "30px"}}>
                <span className="btn-label">
                    <i className="glyphicon glyphicon-trash"></i>
                </span>
            </Button>
          <Card style={{width:"400px", marginLeft:"5rem"}}>
          

        <Card.Img height="250px" variant="top" src={item.imgPP}/>
        <Card.Body>
          <Card.Title><h4>{item.nomPP}</h4></Card.Title>
          <Card.Text>{item.adressPP}</Card.Text>
          <Card.Text><b>Telephone: </b>{item.telphPP} / <b>  Fax:</b> {item.faxPP}</Card.Text>
          <Card.Text><b>GSM: </b>{item.gsmPP}</Card.Text>
          <Card.Text><b>Email: </b>{item.mailPP}</Card.Text>
          <a className="btn btn-success btn-labeled" 
        href={item.sitePP} role="button" style={{marginRight:"2rem", marginLeft:"2rem"}}>
            <span className="btn-label">
                <i className="glyphicon glyphicon-info-sign"></i>
            </span>Visite notre site</a>

          
        
          
        </Card.Body>
        {showEdit?<Form>
                <Form.Control type='text'  disabled></Form.Control>                
                <Form.Control type='text'  onChange={(e)=>setShowEdit(e.target.value)} ></Form.Control>
                <Button onClick={()=>handelEdit()}>Edit</Button>

            </Form>:''}
        
      </Card>

       
    </div>
    )
}

export default ParapharmacyItem
