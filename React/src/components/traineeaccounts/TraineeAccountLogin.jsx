import React,{useState} from "react";
import { Link} from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Col, Row, Card, Image } from "react-bootstrap";
import * as Yup from "yup";
import toastr from "toastr";
import Logo from "assets/images/brand/logo/immersed-spiral-logo.png";
import {loginTraineeAccount} from "../../services/traineeAccountsService"
import { useLocation, useNavigate } from "react-router-dom";

function TraineeAccLogin(){
const location = useLocation();
const navigate = useNavigate();
const [formData]= useState({
    username:"",
    password:"",
    zoneId: location.state.id,
});

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username Required"),
  password: Yup.string().required("Password Required"),
  zoneId : Yup.number().required(),
});
const onClickSubmit = (value)=>{
    loginTraineeAccount(value)
    .then(onLoginSuccess)
    .catch(onLoginErr);
}
const onLoginSuccess=()=>{
     const zoneId = location.state.id
     const zoneName = location.state.name.toLowerCase();
     const urlName = zoneName.replace(/\s/g, "");
    navigate(`/zones/${zoneId}/${urlName}`)
    toastr.success("Trainee Account Has been Successfully Verified")
}
const onLoginErr = (err) => {
 toastr.error("Please check for correct credentials", err);
};
    return (
      <React.Fragment>
        <Row className="align-items-center justify-content-center g-0 min-vh-100">
          <Col lg={10} md={10} className="py-8 py-xl-0">
            <Card>
              <Card.Body className="p-6">
                <div className="mb-4">
                  <Link to="/">
                    <Image src={Logo} className="mb-4 w-15 h-15" alt="" />
                    <h3 className="d-inline pull-right">
                      <strong className="text-black">Immersed</strong>
                    </h3>
                  </Link>
                  <h1 className="mb-1 fw-bold">Sign in to {location.state.name}</h1>
                </div>

                <Formik
                  enableReinitialize={true}
                  initialValues={formData}
                  onSubmit={onClickSubmit}
                  validationSchema={loginSchema}
                >
                  <Form>
                    <Row>
                      <Col lg={10} md={10} className="mb-3 m-auto">
                        <label htmlFor="username" className="pb-2">
                          Username
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter Username here"
                        />
                        <ErrorMessage
                          name="username"
                          component="p"
                          className=".has-error"
                        />
                      </Col>
                      <Col lg={10} md={10} className="m-auto mt-3 form-group">
                        <label htmlFor="password">Password </label>
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="8 characters, 1 upper, 1 lower, 1 number, 1 symbol"
                        />
                      </Col>
                      <ErrorMessage
                        name="password"
                        component="p"
                        className=".has-error"
                      />
                      <Col
                        lg={6}
                        md={6}
                        className="m-auto mb-0 d-grid gap-2 mt-8"
                      >
                        <button type="submit" className="btn btn-primary">
                          Sign in
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
}
export default TraineeAccLogin