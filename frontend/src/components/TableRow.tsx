import React, { FC } from "react";
import "./TableRow.scss";
import { IUserStatisticCollection } from "../@types";
import { Link } from "react-router-dom";

const TableRow: FC<IUserStatisticCollection> = props => {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    ip_address,
    clicks,
    page_views,
  } = props;
  const title = `${first_name} ${last_name} | ${document.title}`;
  return (
    <tr className="table-row" key={id} onClick={() => history.pushState(props, title, `/statistics/${id}`)}>
    <td className="text-center">{id}</td>
    <td>{first_name}</td>
    <td>{last_name}</td>
    <td>{email}</td>
    <td>{gender}</td>
    <td>{ip_address}</td>
    <td>{clicks}</td>
    <td>{page_views}</td>
  </tr>
)
};

export default TableRow;
