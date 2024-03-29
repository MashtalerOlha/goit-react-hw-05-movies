import { NavigationLink, Wrapper } from './Navigation.styled';

export default function Navigation() {
  return (
    <Wrapper>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movies">Movie search</NavigationLink>
    </Wrapper>
  );
}
