import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import './App.css';
import Users from './users/Users'
import Login from './login/Login'
import Register from './register/Register'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const NavBar = styled.nav`
  display: flex;
  text-align: right;
  justify-content: flex-end;
`

const StyledLink = styled.div`
  font-size: 20px;
  margin-right: 3%;
`

const StyledButton = styled.button`
  margin-right: 3%
`

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.history.push('/login')
  }


  render() {
    return (
      <div>
        <NavBar>
          {localStorage.getItem('jwt') ? <div></div> : <StyledLink><NavLink to='/login'>Login</NavLink></StyledLink>}
          
          <StyledLink><NavLink to='/users'>Users</NavLink></StyledLink>
          {localStorage.getItem('jwt') ? <div></div> : <StyledLink><NavLink to='/register'>Register</NavLink></StyledLink>}
          
          <StyledButton onClick = {this.logout}>Logout</StyledButton>
        </NavBar>
        <AppWrapper>
          <Route path='/users' component={Users}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          {/* <Route path='/login' component={Login}/> */}
          </AppWrapper>
      </div>
    );
  }
}

export default withRouter(App);
