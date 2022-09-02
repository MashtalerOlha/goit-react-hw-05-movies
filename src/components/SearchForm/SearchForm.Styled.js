import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 35px;

`;

export const SearchButton = styled.button`
  margin: 4px;
  background: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Koulen';
  font-size: 21px;
`;

export const Input = styled.input`
  border: none;
  margin-right: 17px;
  border-bottom: 1px solid black;
  height: 23px;
  outline: none;
  padding: 4px;
  width: 320px;
  font-family: 'Koulen';
  font-size: 21px;

  &:hover,
  &:focus,
  &:active {
    border-bottom: 1px solid #727272;
    box-shadow: rgb(142 142 142 / 91%) 4px 7px 9px -3px;
  }
`;

export const FilmList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 6px;

`;

export const NotFound = styled.p`
  font-family: 'Koulen';
  font-size: 35px;
  text-align: center;
`