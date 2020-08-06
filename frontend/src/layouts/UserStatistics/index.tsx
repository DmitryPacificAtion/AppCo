import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
// import { IUserStatisticCollection } from 'frontend/src/@types';
import { RouteComponentProps } from 'react-router';
// import './styles.scss';

interface IProps {
  title?: string;
}

const UserStatistics = (props: RouteComponentProps & IProps) => {
  const { title } = props;
  useEffect(() => {
    document.title = `${title} | AppCo`;
  });
  return (
    <>
      <Header />
      <Breadcrumbs title={title} />
      <Container>
        <h1>{title}</h1>
        <h2>Clicks</h2>
        <h2>Vievs</h2>
      </Container>
    </>
  );
};

export default UserStatistics;
