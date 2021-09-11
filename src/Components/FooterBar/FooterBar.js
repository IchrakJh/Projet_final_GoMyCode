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

export default function NavigationBar() {

  

  
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
    <AppBar position="static">
    
      
      <Toolbar className={classes.toolbar} variant="dense" style={{color:"yellow", background:"#212529"}} >
        
        <Navbar.Brand href="/Home" className="d-inline-block align-top" 
        style={{fontSize:"18px", color:"yellow", fontFamily:"serif", marginLeft: "20px" }}>
          <img alt="fg" src="/favicon.ico" width="60" height="60" className="d-inline-block align-top"
          />
           {' '}<Navbar><em>healthy app</em></Navbar>
        </Navbar.Brand>

            
                

                  75 895 879 / 75 895 877<br/>
                  contact@gmail.com<br/>
                  
                  Z.I gabes Tunis<br/>
            
        
        
        
        
      
      
    



         
        
      </Toolbar>


    
    
    </AppBar>
  );
}
