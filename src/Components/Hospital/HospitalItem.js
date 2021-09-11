import React , {useSelector} from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import { DeleteTodoH, DoneTodoH } from '../../redux/Slices/HosPitalSlice'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
const HospitalItem = ({item}) => {
    const dispatch = useDispatch()

   
  const handelDelet=()=>{
      dispatch(DeleteTodoH({idH:item.idH}))
  }

 
  
    return (
      
        <div style={{paddingBottom:"20px", paddingTop:"30px"}}> 
          <Button className="btn btn-labeled btn-info"style={{width: "30px" , marginLeft:"86.5%"}}>
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
          

            <Card.Img height="250px" variant="top" src={item.imgH}/>
            <Card.Body>
              <Card.Title><h4>{item.titleH}</h4></Card.Title>
              <Card.Text>{item.secteurH}</Card.Text>
              <Card.Text><p style={{paddingLeft:"3px",paddingRight:"10px", textAlign: "justify"}}>{item.descriptionH}</p></Card.Text>
              <Card.Text><b>Telephone: </b>{item.telph} / <b>  Fax:</b> {item.faxH}</Card.Text>
              <Card.Text><b>Email: </b>{item.email}</Card.Text>
              <a className="btn btn-success btn-labeled" 
            href="http://www.jquery2dotnet.com" role="button" style={{marginRight:"2rem", marginLeft:"2rem"}}>
                <span className="btn-label">
                    <i className="glyphicon glyphicon-info-sign"></i>
                </span>Info Web</a>

              
            
              
            </Card.Body>
            
          </Card>


           
        </div>
    )
}

export default HospitalItem

