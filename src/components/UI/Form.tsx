/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Form.css";
import { Checkbox } from "antd";
import { Switch } from "antd";
import { Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ItemForm from "../ItemForm/ItemForm";
import { useState } from "react";

const Form = () => {
  const handleItemChange = (e: React.FormEvent, item: any) => {
    const { id, value } = e.target as HTMLInputElement;
    console.log(id, value);
    const updatedItem = { ...item, [id]: value };
    const updatedData = itemData.map((dataItem) =>
      dataItem === item ? updatedItem : dataItem
    );
    setItemData(updatedData);
  };

  const handleAddItem = () => {
    setItemData([...itemData, { ...itemData[0] }]); // Add a new set of input fields with initial values
  };

  const handleRemove = (index: any) => {
    const updatedData = itemData.filter((_, i) => i !== index);
    setItemData(updatedData);
  };

  const [itemData, setItemData] = useState([
    {
      questionaire: "",
    },
  ]);

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
      <div className="add-question" onClick={handleAddItem}>
        <PlusOutlined className="thick-icon" />
        <span>Add a question</span>
      </div>

      <div className="additional-questions">
        {itemData.map((item, index) => (
          <div key={index}>
            <ItemForm
              item={item}
              itemData={itemData}
              index={index}
              handleItemChange={handleItemChange}
              handleRemove={handleRemove}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
