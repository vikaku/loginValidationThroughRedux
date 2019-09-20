import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React  from 'react';
import EmployeeList from '../component/EmployeeList';
import App from '../component/App'

class AppRouter extends React.Component{

    render(){
      return(
        <BrowserRouter>
        <div>
            <Switch>
            <Route path ="/" component = {App} exact ={true}/>
            <Route path ="/employeelist" component = {EmployeeList} exact ={true} />
          </Switch> 
        </div>
        
        </BrowserRouter>
        
      )
    }
  }
  
export default AppRouter;