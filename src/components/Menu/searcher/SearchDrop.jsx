import React from 'react'
import  '../../../assets/styles/components/menu/searcher/Searcher.scss'



const SearchDrop = (props) => {
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(e);
    }
    let drawerSearcherClass ='container-inputsearch';
    if(props.show){
        drawerSearcherClass='container-inputsearch open'
    }

    return (
        <div className={drawerSearcherClass}>
            <form onSubmit={handleSubmit}>
                <input  className="inputSearch" type="text" placeholder="Ingresa tu Busqueda        &#xf002;"/>
                
            </form>
        </div>
    )
}

export default SearchDrop
