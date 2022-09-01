import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Film = styled(Link)`
  text-decoration: none;
`;

export const Movie = styled.li`
  text-decoration: none;
  max-width: 300px;
  margin-bottom: 10px;
  border: 2px solid #868686;
`;

export const Item = styled.li`
  max-width: 300px;
  border: 2px solid #868686;
  margin-bottom: 11px;

`;

export const MovieTitle = styled.p`
  color: black;
  font-size: 21px;
  text-align: center;
`;
