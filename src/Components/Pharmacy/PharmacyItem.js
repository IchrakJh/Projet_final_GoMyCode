import React , {useSelector} from 'react'
import { Tabs, Tab,Button,Table,Card,  Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { DeleteTodoPP, DoneTodoPP } from '../../redux/Slices/ParaPharmacySlice'



const PharmacyItem = ({item}) => {
    const dispatch = useDispatch()

    const handelDone=()=>{
      dispatch(DoneTodoPP({idPP:item.idPP}))
  }

  const handelDelet=()=>{
      dispatch(DeleteTodoPP({idPP:item.idPP}))
  }
    return (
        <div>
          
            
          <Card style={{width:"400px", marginLeft:"5rem"}}>
          


            <Card.Img height="250px" variant="top" src={item.imgH}/>
            <Card.Body>
              <Card.Title><h4>{item.nomPy}</h4></Card.Title>
              <Card.Text>{item.typePy}</Card.Text>
              <Card.Text><b>Telephone: </b>{item.telphPy} / <b>  Fax:</b> {item.faxPy}</Card.Text>
              <Card.Text><b>GSM: </b>{item.gsmPy}</Card.Text>
              <Card.Text><b>Email: </b>{item.mailPy}</Card.Text>
              <Card.Text><b>Adresse: </b>{item.adressPy}</Card.Text>
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

export default PharmacyItem

