import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Roll } from "react-awesome-reveal";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  let navigate = useNavigate();
  const nodeRef = React.useRef(null);


  const postData = () => {
    if (firstName && lastName && checkbox) {
      axios
        .post(`https://647f6a30c246f166da90b660.mockapi.io/CRUD`, {
          firstName,
          lastName,
          checkbox
        })
        .then(() => {
          toast.success("Added Successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
          navigate("/read");
        });
    } else {
      toast.error("Please fill out all the fields.!", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  };
  return (
    <div>
      <Form nodeRef={nodeRef} className="create-form my-3">
        <Roll>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={e => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I agree to the Terms and Conditions"
              onChange={e => setCheckbox(!checkbox)}
            />
          </Form.Field>
        </Roll>
        <Button
          inverted
          color="pink"
          onClick={postData}
          type="submit"
          className="my-4"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Create;
