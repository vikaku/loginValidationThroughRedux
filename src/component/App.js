import React,{Component} from 'react'
import EmployeeList from './EmployeeList';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            authenticate:{
                username:'',
                password:''
            },
                formErrors:{username:'',password:''},
                usernameValid:false,
                passwordValid:false,
                formValid:false,
                ref:null
                
            
        }
        
    }
   
    handleSubmit = ()=>{
        console.log('submit result',this.state.authenticate);
        this.props.authenticate(this.state.authenticate);
        window.location='http://localhost:3002/employeelist'
        
    }
    handleChange = (e)=>{
       let {name,value} =e.target;
       this.setState(
                        {authenticate:{...this.state.authenticate,[name]:value}},
                        () =>{this.validateField(name,value)}
                    )
            
    }


    validateField = (fieldName,fieldValue) =>{

        let fielValidationErrors=this.state.formErrors;
        let usernameValid=this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName){
            case 'username':
            usernameValid=fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fielValidationErrors.username=usernameValid ?'':'invalid username'
                    break;
            case 'password':
                    passwordValid=fieldValue.length>=6;
                    fielValidationErrors.password=passwordValid ? '':'invalid password'
                    break;
            default:
                break;

        }

        this.setState({
                        formErrors:fielValidationErrors,
                        usernameValid:usernameValid,
                        passwordValid:passwordValid,
                        },this.validateForm
                    )
    }


    validateForm(){
        this.setState({formValid:this.state.usernameValid && this.state.passwordValid })
    }


    render(){
        console.log('check validate',this.props.login)
        return (
            <div className="">
                <div className =''>
                    <form method='post'  name='formName'>
                        <formGroup>
                        <div className='username'>
                            <label for ='uname' className=''><b>Username:</b></label>
                            <input className='' name="username" onChange={(e)=>this.handleChange(e)} type='text'  placeholder='enter username'  />
                            <p>{this.state.formErrors.username}</p>
                        </div>
                        </formGroup>
                        <formGroup>
                        <div className = 'password'>
                            <label for='password' className=''><b>Password:</b></label>
                            <input className='' name="password" onChange={(e)=>this.handleChange(e)} type='password'  placeholder ='enter password'/>
                            <p>{this.state.formErrors.password}</p>
                        </div>
                        </formGroup>
                    </form>
                    <button className='ui green button' onClick={this.handleSubmit} type="submit" disabled={!this.state.formValid}>Login</button>

                </div>
                
            </div>
        )

            
        
    }
}

const loginMapStateToProps = (state) =>{

    console.log(state);
    return {

        login:state.login
    }

}
const loginDispatchProps =(dispatch) =>{
    return {
        authenticate:(data)=>{dispatch({type:"Validate",payload:data})}
    }
}

export default connect(loginMapStateToProps,loginDispatchProps)(App); 
