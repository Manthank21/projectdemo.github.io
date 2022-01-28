import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Appcss from './App.css';
import { Form } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';



function Signin() {
    return (
        <>
         <div className="ssuper">
            <div className="smain">
                <Form>
                    <Col md={4}>

                        <FormGroup>
                            <Label for="name">
                                <h5> Name</h5>
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="First name first"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">
                                <h5> Date Of Birth</h5>
                            </Label>
                            <Input
                                id="exampleDate"
                                name="date"
                                placeholder="date "
                                type="date"
                            />

                        </FormGroup>
                    </Col>
                </Form>
                <h5>Select Gender</h5>
                <div className="form-check">

                    <input
                        className="form-check-input"
                        type="radio"
                        name=" Male"
                        id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="Female"
                        id="flexRadioDefault2"
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name=" Other"
                        id="flexRadioDefault2"
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Other
                    </label>
                </div>

                <Form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleAddress">
                                <h5>  Address</h5>
                            </Label>
                            <Input
                                id="exampleAddress"
                                name="address"
                                placeholder="society name,lane no"
                            />
                        </FormGroup>


                    </Col>


                    <Col md={4}>
                        <FormGroup >
                            <Label for="exampleAddress2">
                                <h5> Permanent Address</h5>
                            </Label>
                            <Input
                                id="exampleAddress2"
                                name="address2"
                                placeholder="society name,lane no"
                            />
                        </FormGroup>
                    </Col>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleCity">
                                    <h5>City</h5>
                                </Label>
                                <Input
                                    id="exampleCity"
                                    name="city"
                                    placeholder="Enter City"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">
                                    <h5>State</h5>
                                </Label>
                                <Input
                                    id="exampleState"
                                    name="state"
                                    placeholder="Enter State"
                                />
                            </FormGroup>
                        </Col>


                    </Row>
                </Form>

            </div>

            <div className="rightsidesign">
                <Form>
                    <Row form>
                        <Col md={3}  >
                            <FormGroup  >
                                <Label for="exampleZip" >
                                    <h5>  Zip</h5>
                                </Label>
                                <Input
                                    id="exampleZip"
                                    name="zip"
                                />
                            </FormGroup>
                            <FormGroup  >
                                <Label for="exampleZip" >
                                    <h5>  Flat Number</h5>
                                </Label>
                                <Input
                                    id="exampleZip"
                                    name="Flat Number"
                                    placeholder="Enter Flat Number"
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    <h5>Email</h5>
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">
                                    <h5>Mobile Number</h5>
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="mnumber"
                                    placeholder="Mobile Number"

                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    <h5>Password</h5>
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password(at least 5 letters 1 capital,1special character)"
                                    type="password"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">
                                    <h5>ReEnter Password</h5>
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="*******"
                                    type="password"
                                />
                            </FormGroup>

                        </Col>
                    </Row>

                    <FormGroup check>
                        <Input
                            id="exampleCheck"
                            name="check"
                            type="checkbox"
                        />


                        <Label
                            check
                            for="exampleCheck"
                        >
                            <h5>Accept Terms & Conditions</h5>
                        </Label>
                    </FormGroup>
                    <Button>
                        Sign in
                    </Button>
                </Form>
                  
            </div>

            <a href="/" className="slogin btn"> Login</a>
            </div>
        </>
    );

}

export default Signin;