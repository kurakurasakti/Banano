import React,  { Component, propTypes } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
//import terserah from 'universal-cookie'
//import { resetUser } from './../1.actions'

//const objCookie = new terserah()
class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      onClikCart=()=>{
        alert('ayam')
      }
    render(){
        return(
            <div>
                <Navbar style={{backgroundColor:"whitesmoke"}} light>
                    <NavbarToggler onClick={this.toggleNavbar} style={{borderColor : "transparent"}} className="mr-2" />
                    <NavbarBrand href="/" className="mx-auto" >BANANO</NavbarBrand>
                    <NavbarBrand onClick={this.onClikCart} className="ml-2">CART</NavbarBrand>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                      <Nav navbar>
                        <NavItem>
                          <NavLink href="/components/">Outer</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/components/">Top</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/components/">Bottom</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header


