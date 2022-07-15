import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { nameState } from "../state/slices/nameLogSlice";
import { setLogIn } from "../state/slices/nameLogSlice";
import { useNavigate } from "react-router-dom";

interface IProps {}

const LogForm: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const navigate = useNavigate()

  const addingName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const log = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (name) {
        let user: nameState = {
            name: name,
            logged: true,
          };
          dispatch(setLogIn(user))
          setName("")
          navigate("/pokedex")
    }
  };



  return (
    <div>
      <h3>Introduce your name </h3>
      <Form className="">
        <div className="container pt-4 pb-2">
          <input
            className="form-control"
            type="text"
            onChange={addingName}
            value={name}
            placeholder="Enter name"
            required
          />
        </div>
        <div>
            <Button variant="outline-primary" onClick={log}>
              Log in
            </Button>
        </div>
        <br />
      </Form>
    </div>
  );
};

export default LogForm;
