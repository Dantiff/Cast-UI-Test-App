import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, Switch, Route } from 'react-router';
import styled from 'styled-components';
import { NavbarBrand, Nav, NavItem } from 'reactstrap';
import * as Components from './components';

const StyledApp = styled.div`
  display: flex;
  text-align: center;
  min-height: 100vh;
  a {
    text-decoration: none;
  }
`;
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
`;
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
`;
const Main = styled.main`
  position: relative;
  min-height: 90vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  text-align: left;
  > * {
    width: 80%;
  }
`;
const StyledNavItem = styled(NavItem)`
  padding: 8px 8px;
  a {
    color: wheat;
    padding: 6px 8px;
  }
`;
const SideNav = ({ ...props }) => {
  return (
    <StyledApp>
      <StyledSideNav>
        <Nav className="ml-auto" navbar>
          <NavbarBrand href="/home">Cast UI</NavbarBrand>

          {Object.keys(Components).map(component => (
            <StyledNavItem key={component}>
              <Link to={component.split('Test')[1]}>
                {component.split('Test')[1]}
              </Link>
            </StyledNavItem>
          ))}
        </Nav>
      </StyledSideNav>
      <StyledAppColumn>{props.children}</StyledAppColumn>
    </StyledApp>
  );
};

class App extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  render() {
    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav>
              <Main>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/home" />}
                  />
                  {Object.keys(Components).map(component => (
                    <Route
                      key={component}
                      path={`/${component.split('Test')[1]}`}
                      component={Components[component]}
                    />
                  ))}
                </Switch>
              </Main>
            </SideNav>
          </React.Fragment>
        )}
      />
    );
  }
}

export default App;
