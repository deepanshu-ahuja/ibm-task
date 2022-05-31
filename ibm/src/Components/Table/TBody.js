const TBody = ({data}) =>{
    return  (
        <tbody>           
           {data.length > 0  && data.map(row => <tr>
                <td>{row.name}</td>
                <td>{row.designation}</td>
                <td>{row.salary}</td>
            </tr>)}
        </tbody>
    )
}


export default TBody;