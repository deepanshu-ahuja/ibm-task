
import styles from './index.css'
import TBody from './TBody';
import THeader from './THeader';

const Table = ({headers, data})=>{
    return (
        <div className={styles.Table}>
          <table>
            <THeader headers={headers}/>
            <TBody data={data}/>
          </table>
        </div>
      );
}

export default Table