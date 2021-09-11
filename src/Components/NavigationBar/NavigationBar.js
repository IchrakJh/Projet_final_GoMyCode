import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Nav, Navbar,Dropdown, Container, NavDropdown, Button,FormControl, Form} from 'react-bootstrap'
import InputBase from '@material-ui/core/InputBase';
import { alpha} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '37ch',
      },
    },
  },
}));

export default function NavigationBar({setSearchCondition}) {

  

  
  const anchorRef = React.useRef(null);

  const menuId = 'primary-search-account-menu';
 







  
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

 
  return (
    <AppBar position="fixed">
    
      
      <Toolbar className={classes.toolbar} variant="dense" style={{color:"yellow", background:"#212529"}} >
        
        <Navbar.Brand href="/Home" className="d-inline-block align-top" 
        style={{fontSize:"25px", color:"yellow", fontFamily:"serif", marginLeft: "10px" }}>
          <img alt="fg" src="/favicon.ico" width="60" height="60" className="d-inline-block align-top"
          />
           {' '}<Navbar><em>healthy app</em></Navbar>
        </Navbar.Brand>

        <Typography className={classes.title}  >
          <Navbar variant="dark" bg="dark" expand="lg" >
            <Nav styleName={{marginLeft: "50px", textDecoration:"none" }}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                  <NavDropdown
                  style={{marginBottom: "1px", marginRight: "30px", marginLeft: "30px",fontSize:"20px",color:"white"}} 
                  className="d-inline mx-2" id="nav-dropdown-dark-example" title="Hospital" menuVariant="dark">
                    <Link to="/Public"></Link>
                    <NavDropdown.Item><Link style={{textDecoration:"none" ,color:"white"}} to="/Public">Public</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{textDecoration:"none" ,color:"white"}}  to="/Private">Private</Link></NavDropdown.Item>
                    
                  </NavDropdown>

                  <NavDropdown 
                  style={{marginBottom: "1px", marginRight: "10px", marginLeft: "10px",fontSize:"17px"}} title="Doctors" menuVariant="dark">
                    
                    <NavDropdown.Item><Link to="/Cardiologist">Cardiologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Dentist">Dentist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Dermatologist">Dermatologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/General">General</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Gynecologist">Gynecologist</Link></NavDropdown.Item>
                    
                    <NavDropdown.Item><Link to="/Ophthalmologist">Ophthalmologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Orthopedist">Orthopedist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Pediatrician">Pediatrician</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Psychiatrist">Psychiatrist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Radiologist">Radiologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Surgeon">Surgeon</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/Urologist">Urologist</Link></NavDropdown.Item>
                    
                  </NavDropdown>

                  <Nav.Link style={{marginBottom: "1px", marginRight: "10px", marginLeft: "10px",fontSize:"17px"}} 
                  ><Link to="/Pharmacy" style={{textDecoration:"none" ,color:"white"}}>Pharmacy</Link></Nav.Link>
                  <Nav.Link style={{marginBottom: "1px", marginRight: "10px", marginLeft: "10px",fontSize:"17px"}} 
                  ><Link style={{textDecoration:"none" ,color:"white"}} to="/Parapharmacy">Parapharmacy</Link></Nav.Link>
                  <Nav.Link style={{marginBottom: "1px", marginRight: "10px", marginLeft: "10px",fontSize:"17px"}}
                  ><Link to="/Paramedical" style={{textDecoration:"none" ,color:"white"}}>
                  Paramedical</Link></Nav.Link>
                  
                  <Nav.Link style={{marginBottom: "1px", marginRight: "10px", marginLeft: "10px",fontSize:"17px"}}
                  > <Link to="/Optician" style={{textDecoration:"none" ,color:"white"}}>
                  Optician</Link></Nav.Link> 

                </Navbar.Collapse>
            </Nav>
          </Navbar>
        </Typography>
        
        
        
        
        
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon onChange={(e)=>setSearchCondition(e.target.value.toLowerCase())}/></div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} 
            inputProps={{ 'aria-label': 'search' }}/>
          </div>
          <div className={classes.root}>
      
      
        
          
          
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/ProfilUser">
                <MenuItem onClick={handleClose}>Se connecte</MenuItem></Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        
      
    </div>



         
        </Toolbar>
      </Toolbar>


    
    
    </AppBar>
  );
}
