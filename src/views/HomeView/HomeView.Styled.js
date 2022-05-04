import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
list-style: circle;
list-style-position: inside;
}`;

export const Film = styled(Link)`
text-decoration: none;
color: black;
font-size: 21px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;


// margin: 50px;
//     display: flex;
//     gap: 25px;


// position: absolute;
// top: 109px;
// left: 51px;