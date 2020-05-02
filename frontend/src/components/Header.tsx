import React, { FC } from 'react';
import './Header.scss';
import Container from './Container';

const Header: FC = () =>
<header className="header">
  <Container><div className="header__logo">AppCo</div></Container>
</header>

export default Header;
