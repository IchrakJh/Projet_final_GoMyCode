import React , {useSelector} from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { DeleteTodoPD, DoneTodoPD } from '../../redux/Slices/ParaMedicalSlice'



const ParamedicalItem = ({item}) => {
    const dispatch = useDispatch()

    const handelDone=()=>{
      dispatch(DoneTodoPD({idPD:item.idPD}))
  }

  const handelDelet=()=>{
      dispatch(DeleteTodoPD({idPD:item.idPD}))
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
          

      
      
        <Card.Img height="250px" variant="top" src={item.imgPD}/>

        <Card.Body>
          <Card.Title><h4>{item.nomPD}</h4></Card.Title>
          <Card.Text>{item.adressPD}</Card.Text>
          <Card.Text><b>Telephone: </b>{item.telphPD} / <b>  Fax:</b> {item.faxPD}</Card.Text>
          <Card.Text><b>GSM: </b>{item.gsmPD}</Card.Text>
          <Card.Text><b>Email: </b>{item.mailPD}</Card.Text>
          <a className="btn btn-success btn-labeled" 
        href={item.sitePP} role="button" style={{marginRight:"2rem", marginLeft:"2rem"}}>
            <span className="btn-label">
                <i className="glyphicon glyphicon-info-sign"></i>
            </span>Visite notre site</a>

          
        
          
        </Card.Body>
        
      </Card>

       
    </div>

    )
}

export default ParamedicalItem

