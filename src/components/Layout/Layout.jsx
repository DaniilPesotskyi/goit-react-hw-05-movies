import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li>
              <NavLink className={css.navigationLink} to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navigationLink} to="/movies">
                MOVIES
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
