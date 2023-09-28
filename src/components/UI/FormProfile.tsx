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

const FormProfile = (props: Props) => {
  return (
    <>
      <div className="form-group">
        <Row>
          <Col span={12}>
            <label htmlFor="phone">Education</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Mandatory</Checkbox>
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
            <label htmlFor="phone">Experience</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Mandatory</Checkbox>
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
            <label htmlFor="phone">Resume</label>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                {" "}
                <Checkbox>Mandatory</Checkbox>
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

export default FormProfile;
