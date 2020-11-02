import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import TableComponent from "./components/table";
import { Button } from "react-bootstrap";

import { Columns, Data } from "./data/table";

function App() {
  const [data, setTableData] = useState(Data || []);

  const handleNewRow = () => {
    setTableData(
      data.concat({
        inputChecked: false,
        fullName: "",
        gender: "",
        selection: "",
      })
    );
  };

  const onInputChange = (e, rowIndex) => {
    setTableData(
      data.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            fullName: e.target.value,
          };
        }
        return row;
      })
    );
  };
  const onSelectChange = (e, rowIndex) => {
    setTableData(
      data.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            selection: e.target.value,
          };
        }
        return row;
      })
    );
  };

  const onRowSelect = (e, rowIndex) => {
    setTableData(
      data.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            inputChecked: e.target.checked,
          };
        }
        return row;
      })
    );
  };

  const onGenderChange = (e, rowIndex) => {
    setTableData(
      data.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            gender: e.target.value,
          };
        }
        return row;
      })
    );
  };

  return (
    <>
      <NavbarComponent />
      <TableComponent
        columns={Columns}
        data={data}
        onInputChange={onInputChange}
        onSelectChange={onSelectChange}
        onRowSelect={onRowSelect}
        onGenderChange={onGenderChange}
      />
      <Button variant="primary" onClick={handleNewRow}>
        Add new row
      </Button>
    </>
  );
}

export default App;
