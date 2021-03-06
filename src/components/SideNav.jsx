import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import { ChevronDown, ChevronUp, Menu, X } from 'react-feather';
import { NavLink } from 'react-router-dom';

class SideNav extends Component {
    state={
        toggle : false
    }

    listComp = ()=>{
        const dataNav = this.props.data
        const isActiveTab = this.props.dataActiveTab
        // console.log(this.props)
        return(
            dataNav.map((res,i)=>(
                <Fragment key={i} >
                    {
                        res.isShowed === true && res.isAllowed === true?
                        <NavLink 
                        to={`${res.id}`}
                        exact
                        activeClassName='active'
                        onClick={ isActiveTab !== res.id ? ()=>this.props.activeTab(res.id) : ()=>this.props.activeTab('') }
                        >
                            {res.id} 
                            {res.childs? 
                                isActiveTab === res.id ? <ChevronUp/> : <ChevronDown/> 
                            : null}
                        </NavLink>
                        :res.isShowed === true && res.isAllowed === false?
                            <li className='disabled'>{res.id} <span>Disabled</span>
                            {res.childs? <ChevronDown/> : null}
                            </li>
                        :null
                    }
                    {res.childs && isActiveTab === res.id? this.listCompChild(res.childs) : null}
                </Fragment>
            )) 
        )
    }

    listCompChild = (data)=>{
        const isActiveChildTab = this.props.dataActiveChildTab
        // console.log(isActiveChildTab, 'child tab')
        return(
            data.map((res,i)=>(
                <Fragment key={i} >
                    {
                        res.isShowed && res.isAllowed?
                        <NavLink 
                        to={`${res.id}`}
                        className='child'
                        onClick={ isActiveChildTab !== res.id ? ()=>this.props.activeChildTab(res.id) : ()=>this.props.activeChildTab('') }
                        >
                            {res.id} 
                            {res.childs? 
                            isActiveChildTab === res.id ? <ChevronUp/> : <ChevronDown/> 
                            :null}
                            
                        </NavLink>
                        :res.isShowed === true && res.isAllowed === false?
                        <li className='disabled child'>{res.id} <span>Disabled</span>
                            {res.childs? <ChevronDown/> : null}
                        </li>
                        :null
                    }
                    {res.childs && isActiveChildTab === res.id? this.listCompGrandChild(res.childs) : null}
                </Fragment>
            )) 
        )
    }

    listCompGrandChild = (data)=>{
        return(
            data.map((res,i)=>(
                <Fragment key={i} >
                    {
                        res.isShowed && res.isAllowed?
                        <NavLink to={`${res.id}`} className='g_child'>{res.id}</NavLink>
                        :res.isAllowed === false?
                        <li className='disabled g_child'>{res.id} <span>Disabled</span></li>
                        :null
                    }
                </Fragment>
            )) 
        )
    }

    toggle = () =>  this.props.handleToggle(!this.props.toggleMenu)

    render() {
        // console.log(this.props.dataActiveTab, 'activated')
        return (
            <>
            <div className="toggle" onClick={this.toggle}>
                {!this.props.toggleMenu?<Menu/> : <X/>}
            </div>
            {
                this.props.toggleMenu?
            <Grid item xs={12} sm={2} className='side_nav'>
                <div className="head">
                    <img className='logo' src={logo} alt='logo' />
                    <img className='profile' src="https://picsum.photos/id/1005/200/300" alt="profile" />
                    <p className="name">Kemal Aditya Zulfikar</p>
                </div>
                <div className="menus">
                    <ul>
                        {this.listComp()}
                    </ul>
                </div>
            </Grid>
            :null
            }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      data: state.jsonNav,
      dataActiveTab : state.dataActiveTab,
      dataActiveChildTab : state.dataActiveChildTab,
      toggleMenu : state.toggleMenu,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        activeTab: (data) => dispatch({ type: "ACTIVE_TAB", data: data }),
        activeChildTab: (data) => dispatch({ type: "ACTIVE_CHILD_TAB", data: data }),
        handleToggle: (data) => dispatch({ type: "TOGGLE_MENU", data: data }),
    };
};


export default connect( mapStateToProps, mapDispatchToProps )(SideNav)