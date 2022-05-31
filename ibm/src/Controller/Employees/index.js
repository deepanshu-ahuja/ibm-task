import { useState } from "react"
import Table from "../../Components/Table"
import NewEmployee from "./NewEmployee"
import { employees , headers} from "./utils"
import './index.css'

const defaultVal = 'NA';
const Employees = ({data})=>{
    
    const [employeeList, setEmployeeList] = useState(employees)
    const [inputs, setInputs] = useState({})

    const removeRow = ()=>{
        if(employeeList.length) setEmployeeList(employeeList.slice(0, -1))
        else {
            setEmployeeList(employees)
            alert('Empty List. Press "ok" to Reset.')
        }
    }

    const onChange = (event)=>{
        const {value, name} = event?.target;
        setInputs((prevInputs)=>{
            return {...prevInputs, [name]: value}
        })
    }

    const addRow = ()=>{
        const {name = defaultVal, salary = defaultVal, designation = defaultVal} = inputs || {};
        const updatedList = [...employeeList, {name, salary, designation}]
        setEmployeeList(updatedList);
        setInputs({})
    }
    return  <div className="employeeRoot">
            <NewEmployee onChange={onChange} inputVal={inputs}/>
            <div className="actionWrapper">
                <button  className="btn" onClick={addRow}>Add</button>
                <button className="btn" onClick={removeRow}>{'Remove'}</button>
            </div>
            <Table headers={headers} data={employeeList || []} />
           </div>
}   

export default Employees;