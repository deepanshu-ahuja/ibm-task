import { Fragment } from "react";
import { inputs } from "./utils"

const NewEmployee = ({onChange, inputVal})=>{
    return <>
    <div className="rootEmployee">
        {inputs.map((input)=>
            <Fragment>
            <label htmlFor={input.key}>{input.label}
            <input onChange={onChange}
                    name={input.key}
                    key={input.key} 
                    type={input.type || 'text'}
                    id={input.key}
                    value={inputVal[input.key] || ''}
             />
             </label>
            </Fragment>
        )}
     </div>

    </>
}

export default NewEmployee;