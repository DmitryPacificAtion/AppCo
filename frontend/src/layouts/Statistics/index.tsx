import React, { FC, useEffect } from "react";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";
import Table from "../../components/Table";
import PaginationProvider from "../../components/PaginationProvider";
import mockedData from '../../mockedData.json';
import "./styles.scss";

interface IProps {
  title: string;
}

const Statistics: FC<IProps> = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | AppCo`;
  });
  return (
    <>
      <Header />
      <Breadcrumbs title={title} />
      <Container>
        <h1>Users statistics</h1>
        <Table data={mockedData} />
        <PaginationProvider />
      </Container>
    </>
  );
};

export default Statistics;
