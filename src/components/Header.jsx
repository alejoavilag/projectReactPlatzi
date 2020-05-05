import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logoPlatziVideo.png';
import userIcon from '../assets/static/logoUser.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="logoPlatziVideo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User" width="40" height="40" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
