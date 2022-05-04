import { Container } from './Layout.Styled';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </Container>
  );
}
