import { Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DepartmentContext from "../../contexts/Department/departmentContext";

const CreateDepartment = () => {
  const [name, saveName] = useState("");
  const [description, saveDescription] = useState("");
  const [alert, setAlert] = useState({});

  const history = useHistory();
  const departmentContext = useContext(DepartmentContext);
  const { createDepartment } = departmentContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || description.trim() === "") {
      setAlert({
        msg: "All the fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      });
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }
    createDepartment({ name, description });
    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Create Department</h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department Name"
                  name="name"
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="richtext"
                  className="form-control"
                  placeholder="Department Description"
                  name="description"
                  value={description}
                  onChange={(e) => saveDescription(e.target.value)}
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Create
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
