import React, {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router'
import styled from 'styled-components'
import {NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {
  TestAlert,
  TestBadge,
  TestButton,
  TestButtonGroup,
  TestCheckbox,
  TestCopyToClipboard,
  TestDatepicker,
  TestDraggable,
  TestIconButton,
  TestInput,
  TestInputGroup,
} from './components'

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
          <NavbarBrand href="/home">Cast UI</NavbarBrand>
          <StyledNavItem>
            <NavLink href="/alert">Alert</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/badge">Badge</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/button">Button</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/button-group">ButtonGroup</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/checkbox">Checkbox</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/copy-to-clipboard">CopyToClipboard</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/datepicker">Datepicker</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/draggable">Draggable</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/icon-button">IconButton</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/input">Input</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/input-group">InputGroup</NavLink>
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
                  <Route path="/button-group" component={TestButtonGroup} />
                  <Route path="/checkbox" component={TestCheckbox} />
                  <Route
                    path="/copy-to-clipboard"
                    component={TestCopyToClipboard}
                  />
                  <Route path="/datepicker" component={TestDatepicker} />
                  <Route path="/draggable" component={TestDraggable} />
                  <Route path="/icon-button" component={TestIconButton} />
                  <Route path="/input" component={TestInput} />
                  <Route path="/input-group" component={TestInputGroup} />
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
