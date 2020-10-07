import React from 'react'
import  '../../assets/styles/components/menu/Searcher.scss'
//import SearchIcon from '@material-ui/icons/Search';

const SearchDrop = () => {
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(e);

    }
    return (
        <div className="container-inputsearch">
            <form onSubmit={handleSubmit}>
                <input  className="inputSearch" type="text" placeholder="Ingresa tu Busqueda"/>
            </form>
        </div>
    )
}

export default SearchDrop
