import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";

import './login.css';
export default function Login(props) {
    let history = useHistory();
    const [state, setState] = React.useState({
        email: "",
        pass: "",
      });
      
    const handleEmail = (e) => {
        let val = e.target.value;
        setState({...state, email:val});
    };

    const handlePass = (e) => {
        let val = e.target.value;
        setState({...state, pass:val});
    };

    const redirectDashbord =()=>{
        props.LoginFun();
        let url = "/home"
       history.push(url)  
    }

    const isVlaidLogin = ()=>{
        if(state.email === 'admin' && state.pass === "admin"){
            // console.log("valid user")
            redirectDashbord()
            return true
        }
        // console.log("Not valid user")
        return false
    }
    
    const handleLogin = function(e){
        e.preventDefault();
        isVlaidLogin()
    }
    return (
        <Grid container className="h-100 login-wrp"  direction="row" >
            <Grid item xs={6} className="bg-img" >
                <Grid container className="bg-mask" justifyContent="center" alignItems="center">
                    <div className="promo-box"> 
                        <h1 className="title"> Estimation Tool Project</h1> 
                        <p className="sub-title">The Scalable Path Project estimator. A tool that's flexible enough to help you estimate costs.</p>
                    </div>
                </Grid>
               
            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent="center" alignItems="center" className="h-100" direction="column">
                    <h1 className="login-title"> Login</h1>
                    <form onSubmit={handleLogin}>
                            <FormControl>
                                <TextField value={state.email} placeholder="Email"  onChange={handleEmail} id="email"  size="small" variant="outlined" />
                            </FormControl>
                            <FormControl>
                            <TextField value={state.pass} id="pass" type="password" placeholder="password" onChange={handlePass} size="small" variant="outlined" />
                            </FormControl>

                            <Button variant="contained" color="primary"  type="submit" className="w-100"> Login </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}
