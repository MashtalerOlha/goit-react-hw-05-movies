// import { Container } from './Layout.styled';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
