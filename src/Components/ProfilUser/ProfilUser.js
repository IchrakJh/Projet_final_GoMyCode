import React from 'react'
import {Form, Table, Button, Breadcrumb} from 'react-bootstrap'
import './ProfilUser.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';



const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}





const ProfilUser = () => {
  const classes = useStyles();

    return (
        <>
        <div>
          
          
        <Breadcrumbs maxItems={2} aria-label="breadcrumb"style={{fontSize:"70px"}}>
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} style={{fontSize:"70px"}}  variant="top"/>
        Home
        </Link>
  
  <Link color="inherit" href="#" onClick={handleClick} >
    my profil
  </Link>
  
</Breadcrumbs>




</div>



        <Table striped bordered hover>
  
  <tbody>
    
    <tr>
      <td><Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <a href="#" style={{textAlign:"right" ,color:"gray", paddingRight:"50%"}}>Mot de passe oublié ?</a>
    <div><Form.Check type="checkbox" label="Check me out" /></div>
  </Form.Group>
  <Button variant="primary" type="submit">
    se conncte
  </Button>
  <p>Pas de compte ?
    <a href="#" style={{textAlign:"right" ,color:"red"}}>inscrivez-vous</a></p>
  

</Form></td>



      <td>
      <h2>Style Social Media Buttons</h2><br/>

      <a href="#" className="fa fa-rss"></a>
      <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a><br/>
<a href="#" className="fa fa-google"></a>
<a href="#" className="fa fa-linkedin"></a>
<a href="#" className="fa fa-youtube"></a>
<a href="#" className="fa fa-instagram"></a><br/>
<a href="#" className="fa fa-pinterest"></a>
<a href="#" className="fa fa-snapchat-ghost"></a>
<a href="#" className="fa fa-skype"></a>
<a href="#" className="fa fa-android"></a>
<a href="#" className="fa fa-reddit"></a
><a href="#" className="fa fa-dribbble"></a><br/>
<a href="#" className="fa fa-vimeo"></a>
<a href="#" className="fa fa-tumblr"></a>
<a href="#" className="fa fa-vine"></a>
<a href="#" className="fa fa-foursquare"></a><br/>
<a href="#" className="fa fa-stumbleupon"></a>
<a href="#" className="fa fa-flickr"></a>
<a href="#" className="fa fa-yahoo"></a><br/>




      </td>
     
    </tr>
    
  </tbody>
</Table>
        </>
    )
}

export default ProfilUser
