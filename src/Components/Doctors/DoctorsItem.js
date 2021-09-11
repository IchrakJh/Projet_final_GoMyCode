import React , {useSelector} from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { DeleteTodoD, DoneTodoD } from '../../redux/Slices/DocTorSlice'



const DoctorsItem = ({item}) => {
    const dispatch = useDispatch()

    const handelDone=()=>{
      dispatch(DoneTodoD({idD:item.idD}))
  }

  const handelDelet=()=>{
      dispatch(DeleteTodoD({idD:item.idD}))
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
      
      
        <Card.Img height="250px" variant="top" src={item.imgD}/>
        
        <Card.Body>
          <Card.Title><h4>{item.nomD}</h4></Card.Title>
          <Card.Text>{item.adressD}</Card.Text>
          <Card.Text><b>Telephone: </b>{item.telephD} / <b>  Fax:</b> {item.faxD}</Card.Text>
          <Card.Text><b>Email: </b>{item.emailD}</Card.Text>
          <a className="btn btn-success btn-labeled" 
        href="http://www.jquery2dotnet.com" role="button" style={{marginRight:"2rem", marginLeft:"2rem"}}>
            <span className="btn-label">
                <i className="glyphicon glyphicon-info-sign"></i>
            </span>visite notre site</a>

          
        
          
        </Card.Body>
        
      </Card>


       
    </div>
    )
}

export default DoctorsItem

