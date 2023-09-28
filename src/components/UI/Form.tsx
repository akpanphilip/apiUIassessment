/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import "./Form.css";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Switch } from "antd";
import { Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
type Props = {};
// const onChangeCheckBox = (e: CheckboxChangeEvent) => {
//   console.log(`checked = ${e.target.checked}`);
// };
// const onChangeSwitch = (checked: boolean) => {
//   console.log(`switch to ${checked}`);
// };

const Form = (props: Props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">
              Phone <span>(without dial code)</span>
            </label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Internal</Checkbox>
              </Col>
              <Col span={12}>
                {" "}
                <span>
                  <Switch defaultChecked />
                  <span className="switch-title">Hide</span>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <input type="email" />
      </div>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">Nationality</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Internal</Checkbox>
              </Col>
              <Col span={12}>
                {" "}
                <span>
                  <Switch defaultChecked />
                  <span className="switch-title">Hide</span>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <input type="email" />
      </div>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">Current Residence</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Internal</Checkbox>
              </Col>
              <Col span={12}>
                {" "}
                <span>
                  <Switch defaultChecked />
                  <span className="switch-title">Hide</span>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <input type="email" />
      </div>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">ID Number</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Internal</Checkbox>
              </Col>
              <Col span={12}>
                {" "}
                <span>
                  <Switch defaultChecked />
                  <span className="switch-title">Hide</span>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <input type="email" />
      </div>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">Date of Birth</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Internal</Checkbox>
              </Col>
              <Col span={12}>
                {" "}
                <span>
                  <Switch defaultChecked />
                  <span className="switch-title">Hide</span>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <input type="email" />
      </div>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">Gender</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Internal</Checkbox>
              </Col>
              <Col span={12}>
                {" "}
                <span>
                  <Switch defaultChecked />
                  <span className="switch-title">Hide</span>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <input type="email" />
      </div>
      <div className="add-question">
        <PlusOutlined className="thick-icon" />
        <span>Add a question</span>
      </div>
    </>
  );
};

export default Form;
