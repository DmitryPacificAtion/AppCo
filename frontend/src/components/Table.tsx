import React, { FC } from "react";
import "./Table.scss";
import { IUserStatisticCollection } from "../@types";

interface IProps {
  data: IUserStatisticCollection[];
}

const Table: FC<IProps> = ({ data }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP address</th>
          <th>Total clicks</th>
          <th>Total page views</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map(
          ({ id, first_name, last_name, email, gender, ip_address, clicks, page_views }) => (
            <tr>
              <td className='center'>{id}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{ip_address}</td>
              <td>{clicks}</td>
              <td>{page_views}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
