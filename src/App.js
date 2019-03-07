import React, {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router'
import styled from 'styled-components'
import {NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {TestAlert, TestBadge, TestButton} from './components'

const StyledApp = styled.div`
  display: flex;
  text-align: center;
  min-height: 100vh;
  a {
    text-decoration: none;
  }
`
const StyledSideNav = styled.div`
  width: 20%;
  background-color: #282c34;
  text-align: left;
  .navbar-brand {
    font-weight: bold;
    font-size: 2rem;
    color: white;
  }
  .navbar-nav {
    list-style: none;
  }
`
const StyledAppColumn = styled.div`
  flex-grow: 1;
  background: gray;
  > * {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`
const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 138px);
`
const StyledNavItem = styled(NavItem)`
  padding: 12px 8px;
  a {
    color: wheat;
  }
`

const SideNav = ({...props}) => {
  return (
    <StyledApp>
      <StyledSideNav>
        <Nav className="ml-auto" navbar>
          <NavbarBrand href="/">Cast UI</NavbarBrand>
          <StyledNavItem>
            <NavLink href="/home">Home</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/alert">Alert</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/Badge">Badge</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/Button">Button</NavLink>
          </StyledNavItem>
        </Nav>
      </StyledSideNav>
      <StyledAppColumn>{props.children}</StyledAppColumn>
    </StyledApp>
  )
}

class App extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  render() {
    return (
      <Route
        render={({location, history}) => (
          <React.Fragment>
            <SideNav>
              <Main>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/home" />}
                  />
                  <Route path="/alert" component={TestAlert} />
                  <Route path="/badge" component={TestBadge} />
                  <Route path="/button" component={TestButton} />
                </Switch>
              </Main>
            </SideNav>
          </React.Fragment>
        )}
      />
    )
  }
}

export default App
