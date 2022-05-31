
import './index.css'
const THeader = ({headers})=>{
    return <thead>
        <tr>
            {headers.map(header => <th key={header}>{header.toUpperCase()}</th>)}
        </tr>
    </thead>
}

export default THeader;