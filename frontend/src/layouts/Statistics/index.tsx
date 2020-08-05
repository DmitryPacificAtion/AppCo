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
  useEffect(() => {
    fetch("/api/user-statistic", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((resp) => {
        console.log("resp", resp);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
  const TableWithPagination = paginationProvider({ data: mockedData, Component: Table });
  return (
    <>
      <Header />
      <Breadcrumbs title={title} />
      <Container>
        <h1>{title}</h1>
        <TableWithPagination />
      </Container>
    </>
  );
};

export default Statistics;
