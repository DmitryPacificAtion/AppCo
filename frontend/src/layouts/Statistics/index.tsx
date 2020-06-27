import React, { FC, useEffect } from 'react';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Table from '../../components/Table';
import paginationProvider from '../../components/PaginationProvider';
// import { IUserStatisticCollection } from 'frontend/src/@types';
import mockedData from '../../mockedData.json';
import './styles.scss';

interface IProps {
  title: string;
}

const Statistics: FC<IProps> = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | AppCo`;
  });
  const Pagination = paginationProvider({ data: mockedData, Component: Table });
  return (
    <>
      <Header />
      <Breadcrumbs title={title} />
      <Container>
        <h1>Users statistics</h1>
        <Pagination />
      </Container>
    </>
  );
};

export default Statistics;
