import React, { FC } from "react";
import "./Breadcrumbs.scss";
import Container from "./Container";
import { Link } from "react-router-dom";
import ROUTES from "../constants/routes";

interface IProps {
  title?: string;
}

const Breadcrumbs: FC<IProps> = ({ title }) => (
  <div className="breadcrumbs">
    <Container>
      <Link to={ROUTES.main.path} className="breadcrumbs__previous">{ROUTES.main.title}</Link>
      <span className="breadcrumbs__current">{title}</span>
    </Container>
  </div>
);

export default Breadcrumbs;
