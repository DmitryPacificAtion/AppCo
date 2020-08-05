import React, { FC, useEffect } from "react";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";

interface IProps {
  title: string;
}

const NotFound: FC<IProps> = ({title}) => {
  useEffect(() => {
    document.title = `${title} | AppCo`;
  });
  return (
  <>
    <Header />
      <Breadcrumbs />
    <Container>Page not Found</Container>
  </>
)};

export default NotFound;
