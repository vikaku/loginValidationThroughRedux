import React,{Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'

class EmployeeList extends Component{

    render(){
        console.log(this.props.employeeList)
        return (<table>EmployeeList
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>EMAIL</th>
        </tr>
                    <tbody>{this.props.employeeList && this.props.employeeList.map((item,key)=>{
                        return(
                           
                            
                            <tr >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.email}</td>
                            </tr>
                           
                        )
                    })}
                    
                    </tbody>

        
        </table>)
    }
}

const employeeMapStateToProps = (state) =>{

    console.log(state);
    return{
        employeeList:state.employeeList
    }

}

export default connect(employeeMapStateToProps)(EmployeeList);