import React, { FC } from "react";
import "./Table.scss";
import { IUserStatisticCollection } from "../@types";
import TableRow from "./TableRow";

interface IProps {
  data: IUserStatisticCollection[];
}

const Table: FC<IProps> = (props) => {
  const { data = [] } = props;
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
        {data.map((rowData) => (
          <TableRow {...rowData} key={rowData.id}/>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
