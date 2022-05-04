import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
list-style: none;
`;

export const ItemLink = styled(NavLink)`
text-decoration: none;
font-size: 22px;
padding: 15px;
color: black;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;