import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import OpticianItem from './OpticianItem'
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useParams} from "react-router-dom";
import {Container} from 'react-bootstrap'





import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



const OpticianListe = (props) => {
    const params=useParams();
    //let movie=props.movies.find((el)=> el.id == params.xd);

    const [doneFiltre, setDoneFiltre] = useState(false)
    const list = useSelector(state => state.ot.opticianlist)
    console.log(list)

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

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
  
  
  const classes = useStyles();

    return (
        

        <div>

<div>
          
          
        <Breadcrumbs maxItems={5} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                <HomeIcon style={{fontSize:"13px"}}  variant="top"/>  Home
            </Link>
            <Link color="inherit" href="#" onClick={handleClick}>
                Optictian
            </Link>
 
</Breadcrumbs>




</div>







            <Container style={{display:"flex", flexWrap:"wrap"}}>

            {list.map(item=>(
                
                <OpticianItem item={item} />
            ))}
</Container>
        
        
        <div>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
        </div>
        </div>
    )
}

export default OpticianListe
