import { Link } from 'react-router-dom';
export const NotFoundView = () => {
  return (
    <h1>
      404 page not found, go to{' '}
      <Link to="/">Home Page</Link>
    </h1>
  );
};