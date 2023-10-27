import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };
  const getData = () => {
    axios
      .get(`https://647f6a30c246f166da90b660.mockapi.io/CRUD`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://647f6a30c246f166da90b660.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th className="tables">Last Name</th>
            <th className="tables">Checked</th>
            <th className="tables">Update</th>
            <th className="tables">Delete</th>
          </tr>
        </thead>
        {APIData.map((data) => {
          return (
            <tbody key={data.tabe}>
              <tr>
                <td>{data.firstName}</td>
                <td className="tables">{data.lastName}</td>
                <td className="tables">
                  {data.checkbox ? "Checked" : "Unchecked"}
                </td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-outline-info mx-2 "
                      onClick={() => setData(data)}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Read;
