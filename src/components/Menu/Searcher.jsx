import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import  '../../assets/styles/components/menu/Searcher.scss'
//import SearchDrop from './SearchDrop'

const Searcher = () => {
  const [showSearch, setShowSearch] = useState(false)

  const handleClick = () => {
      console.log('aca voy')


  }

    return (
        <div>
            {/* <a href="/"> < SearchIcon style={{ color:'#FF8150', fontSize:'35px'}}/> </a> */}
            <button className="btnSearch" onClick={handleClick}>< SearchIcon style={{ color:'#FF8150', fontSize:'35px'}}/> </button>
        </div>
    )
}

export default Searcher
