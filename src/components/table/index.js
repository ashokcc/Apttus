import React from "react";
import { Table } from "react-bootstrap";
const TableComponent = ({
  columns,
  data,
  onInputChange,
  onSelectChange,
  onRowSelect,
  onGenderChange,
}) => {
  return (
    <>
      <Table
        striped
        bordered
        hover
        style={{ width: "70%", margin: "20px auto" }}
      >
        <thead>
          <tr>
            {columns.map((link, index) => (
              <th key={index}>{link.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  name={`select${index}`}
                  checked={row.inputChecked}
                  onChange={(e) => onRowSelect(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="fullName"
                  onChange={(e) => onInputChange(e, index)}
                  value={row.fullName}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`gender${index}`}
                  checked={row.gender === "male"}
                  value="male"
                  onChange={(e) => onGenderChange(e, index)}
                />
                <label>Male</label>
                &nbsp;
                <input
                  type="radio"
                  name={`gender${index}`}
                  checked={row.gender === "female"}
                  value="female"
                  onChange={(e) => onGenderChange(e, index)}
                />
                <label>Female</label>
              </td>
              <td>
                <select
                  value={row.selection}
                  name="selection"
                  onChange={(e) => onSelectChange(e, index)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
