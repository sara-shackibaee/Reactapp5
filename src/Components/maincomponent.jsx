

import React ,{useState}  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Weather from './Weather'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function Maincomponent() {

    const classes = useStyles();
    const [name ,setname] = useState('')
    const [mode ,setmode] = useState(false)

    function handelclick(){
        console.log(name)
        setmode(true)
    }
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic"  onChange={(e)=>setname(e.target.value)} placeholder='London'/><br></br>
                <Button   variant="contained" color="primary" onClick={handelclick}>Get Weather </Button>
      
            </form>
            {mode?<Weather name={name}/>:false}
        </div>
        
    )
}

export default Maincomponent
