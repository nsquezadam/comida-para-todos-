import React, { Component } from 'react';
// NAVBAR RESPONSIVE 
import Toolbar from '../toolbar/Toolbar';
import SideDrawer from '../sideDrawer/SideDrawer'
import BackDrop from '../Backdrop/BackDrop'
import FormPay from '../formPay/FormPay'
import BackDropPay from '../formPay/BackDropPay'
import SearchDrop from '../searcher/SearchDrop'
import SearchBackDrop from '../searcher/SearchBackDrop'

class NavbarR extends Component {
    state={
        sideFormPayOpen:false, 
        sideDrawerOpen :false, 
        dropSearchOpen:false, 
    };
    drawerToggleSearchClickHandle =() =>{
        this.setState((prevState)=>{
            return{dropSearchOpen: !prevState.dropSearchOpen}
        });
        console.log('soy el buscador')   
    }
    backDropSearchClickHandler =() => {
        this.setState({dropSearchOpen:false})
    }

    drawerToggleDonateClickHandle = () =>{
        this.setState((prevState)=>{
            return{sideFormPayOpen: !prevState.sideFormPayOpen};
        });
        console.log('ala')

    }
    backDropPayClickHandler = () =>{
        this.setState({sideFormPayOpen:false})
        
    };
    drawerToggleClickHandler = () =>{
    
        this.setState((prevState)=>{
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
        console.log('escucho');
    }
    backDropClickHandler = () =>{
    this.setState({sideDrawerOpen:false})
    };
    
    render() {
        // let sideDrawer;
        let backDrop;
        if(this.state.sideDrawerOpen){
            // sideDrawer =  <SideDrawer/>;
            backDrop = <BackDrop click={this.backDropClickHandler}/>;
        }
        let backDropPayF;
        if(this.state.sideFormPayOpen){
            backDropPayF = <BackDropPay click={this.backDropPayClickHandler}/>;
        }
        let backDropSearch;
        if(this.state.dropSearchOpen){
            backDropSearch = <SearchBackDrop click= {this.backDropSearchClickHandler} />
        }
        return (
            <div  style={{height:'100%'}}>
                <Toolbar 
                donateClickHandle={this.drawerToggleDonateClickHandle}
                drawerClickHandle = {this.drawerToggleClickHandler} 
                searchClickHandler={this.drawerToggleSearchClickHandle}
                
                />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
                <FormPay show={this.state.sideFormPayOpen}/>
                {backDropPayF}
                {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
                
                < SearchDrop show={this.state.dropSearchOpen}/>
                {backDropSearch}
            
             
                
            </div>
        );
    }
}

export default NavbarR;