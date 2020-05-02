import React, { FC, useEffect } from "react";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";
import Table from "../../components/Table";
import "./styles.scss";
import { IUserStatisticCollection } from "frontend/src/@types";
import PaginationProvider from "frontend/src/components/PaginationProvider";

interface IProps {
  title: string;
}

const mockedData: IUserStatisticCollection[] = [
  {
    id: 33,
    first_name: "Lori",
    last_name: "Pickless",
    email: "lpicklessw@friendfeed.com",
    gender: "Female",
    ip_address: "184.173.116.43",
    page_views: 260,
    clicks: 565,
  },
];

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
        <PaginationProvider component={Table.bind({data: mockedData})} />
      </Container>
    </>
  );
};

export default Statistics;
