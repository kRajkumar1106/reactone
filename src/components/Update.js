import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Roll } from "react-awesome-reveal";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    if (firstName && lastName && checkbox && id) {
      axios
        .put(`https://647f6a30c246f166da90b660.mockapi.io/CRUD/${id}`, {
          firstName,
          lastName,
          checkbox
        })
        .then(() => {
          toast.success("Updated Successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
          navigate("/read");
        });
    } else {
      toast.error("Please fill out all the fields.", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  };
  return (
    <div>
      <Form className="create-form my-3">
        <Roll>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I agree to the Terms and Conditions"
              checked={checkbox}
              onChange={e => setCheckbox(!checkbox)}
            />
          </Form.Field>
        </Roll>
        <Button
          className="my-4"
          type="submit"
          inverted
          color="pink"
          onClick={updateAPIData}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};
export default Update;
