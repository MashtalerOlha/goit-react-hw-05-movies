import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  margin: 15px;
  color: black;
`;

export const Wrapper = styled.nav`
display: flex;
justify-content: space-between;
padding: 24px;
box-shadow: rgb(17 17 26 / 10%) 0px 1px 0px;
background: #f8f8f8;
`;