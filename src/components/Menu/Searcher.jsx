import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import  '../../assets/styles/components/menu/Searcher.scss'
//import SearchDrop from './SearchDrop'

const Searcher = (props) => {
  //const [showSearch, setShowSearch] = useState(false)


    return (
        <div>
            {/* <a href="/"> < SearchIcon style={{ color:'#FF8150', fontSize:'35px'}}/> </a> */}
            <button className="btnSearch" onClick={props.click}>< SearchIcon style={{ color:'#FF8150', fontSize:'35px'}}/> </button>
        </div>
    )
}

export default Searcher
