import React from "react";
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'reactstrap';

import { Col } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
z 

function ForgotP() {
    return (
        <>
            <div >
                <div className="smain">
                    <Form>   
                        <Col md={4}>

                            <FormGroup>
                                <Label for="name">
                                    <h5> Enter Your Mobile Number/Emailid</h5>
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="First name first"
                                />
                            </FormGroup>
                        </Col>
                        <Button>
                            Submit
                        </Button>
                    </Form>
                    
                    
                </div>

                <a href="/" className="Flogin btn"> Login</a>
            </div>
        </>
    );

}

export default ForgotP;