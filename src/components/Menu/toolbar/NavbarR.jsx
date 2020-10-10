import React, { Component } from 'react';
// NAVBAR RESPONSIVE 
import Toolbar from '../toolbar/Toolbar';
import SideDrawer from '../sideDrawer/SideDrawer'
import BackDrop from '../Backdrop/BackDrop'
import FormPay from '../formPay/FormPay'
import BackDropPay from '../formPay/BackDropPay'

class NavbarR extends Component {
    state={
        sideFormPay:false   
    }
    drawerToggleDonateClickHandle = () =>{
        this.setState((prevState)=>{
            return{sideFormPay: !prevState.sideFormPayOpen};
        });
        console.log('ala')

    }
    backDropPayClickHandler = () =>{
        this.setState({sideFormPay:false})
        
    };

    state ={
        sideDrawerOpen :false
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
            backDrop =<BackDrop click={this.backDropClickHandler}/>;
        }

        let backDropPayF;

        if(this.state.sideFormPayOpen){
            backDropPayF =<BackDropPay click={this.backDropPayClickHandler}/>;
        }


        return (
            <div  style={{height:'100%'}}>
                <Toolbar 
                drawerClickHandle = {this.drawerToggleClickHandler} 
                donateClickHandle={this.drawerToggleDonateClickHandle}
                />
                <FormPay show={this.state.sideFormPayOpen}/>
                {backDropPayF}
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
                
             
                
            </div>
        );
    }
}

export default NavbarR;