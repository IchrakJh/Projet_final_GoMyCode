import React , {useSelector} from 'react'
import {useDispatch} from 'react-redux'
import { DeleteTodoO, DoneTodoO } from '../../redux/Slices/OpTicianSlice'
import { makeStyles } from '@material-ui/core/styles';
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



const OpticianItem = ({item}) => {

  const classes = useStyles();
    const dispatch = useDispatch()

    const handelDone=()=>{
      dispatch(DoneTodoO({idO:item.idO}))
  }

  const handelDelet=()=>{
      dispatch(DeleteTodoO({idO:item.idO}))
  }
    return (


      
        <div>
            <Card style={{ width: '18rem', height:"350px" }}>
  <Card.Img height="175px" variant="top" src={item.imageO}/>
  <Card.Body>
    <Card.Title><h3>{item.nomO}</h3></Card.Title>
    <Card.Text>{item.AdresseO}</Card.Text>  
    <Card.Text>{item.descriptionO}</Card.Text>
    <Card.Text>{item.telepO}</Card.Text>
    <Card.Text>{item.faxO}</Card.Text>
 
    
      
                 

    
  </Card.Body>
  <a href={item.siteO}>
  <Button variant="primary" >WebSite</Button>
  </a>
</Card>

           
        </div>
    )
}

export default OpticianItem

