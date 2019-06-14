import React from "react";
import { Row, Col, Card } from 'react-materialize';
import MainLayout from '../MainLayout'
import { LocalForm, Control } from 'react-redux-form';

const ProfileEdit = (props) => (
  <MainLayout>
    <Row>
      <Col s={12} m={6} className="offset-m3">
        <Card>
          <Row>
            <Col m={8} s={8} offset="">
              <b className="grey-text text-darken-1">Personal Info</b>
            </Col>
          </Row>

          <Row>
            <Col m={12} s={12} offset="">
              <div className="form">
                <div>
                  <LocalForm onSubmit={(values) => props.updateProfile(values)}>
                    <Control.text model=".name"
                      name="name"
                      placeholder="Name"
                    />
                    <Control.text model=".email"
                      name="email"
                      placeholder="Email"
                    />
                    <Control.text model=".description"
                      name="description"
                      placeholder="Description..."
                    />
                    <div className="right">
                      <button type="submit" className="blue btn grey darken-2">Update</button>
                    </div>
                  </LocalForm>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col m={8} s={8} offset="">
              <b className="grey-text text-darken-1">Change Password</b>
            </Col>
          </Row>

          <Row>
            <Col m={12} s={12} offset="">
              <div className="form">
                <div>
                  <LocalForm onSubmit={(values) => props.updatePassword(values)}>
                    <Control.text model=".password"
                      name="password"
                      placeholder="Password"
                    />
                    <Control.text model=".password_confirmation"
                      name="password_confirmation"
                      placeholder="Password Confirmation"
                    />
                    <div className="right">
                      <button type="submit" className="blue btn grey darken-2">Update</button>
                    </div>
                  </LocalForm>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </MainLayout>
);

export default ProfileEdit;