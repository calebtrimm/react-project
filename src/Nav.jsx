import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Nav extends Component {
  handleRefineSearch = evt => {
    this.props.dispatch({
      type: 'REFINE_SEARCH',
      search: evt.target.value
    });
  };
  render = () => {
    return (
      <div className={this.props.className}>
        <Label>GOT IT!</Label>
        <Search
          type="text"
          onChange={this.handleRefineSearch}
          value={this.props.search}
        />
        <LinkBox>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/deck-builder'}>Build Deck</NavLink>
        </LinkBox>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return { search: st.searchQuery };
};
let Navbar = connect(mapStateToProps)(Nav);
export default Navbar;

const Search = styled.input`
  background-color: white;
  border-radius: 5px;
  border: none;
  width: 50%;
  height: 30px;
  margin: 10px;
  padding: 0 10px;
`;

const Label = styled.h1`
  position: absolute;
  left: 10px;
  color: white;
  font-size: 1.5rem;
  font-weight: 800px;
  margin: 0;
`;
const LinkBox = styled.div`
  position: absolute;
  right: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.1rem;
`;
