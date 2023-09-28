/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import "./Form.css";
import { Button } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons";


const AdditionalQuestions = () => {
  return (
    <>
      <div className="form-group">
        <div className="row-title-opt">
          <span>Paragraph</span>
          <PlusOutlined />
        </div>

        <div className="additional-question-review">
          <span>Please tell me about yourself in less than 500 words</span>
          <EditOutlined />
        </div>
      </div>
      <div className="form-group">
        <div className="row-title-opt">
          <span>Dropdown</span>
          <PlusOutlined />
        </div>

        <div className="additional-question-review">
          <span>Please Select Year of graduation from list below</span>
          <EditOutlined />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="question">Question</label>

        <input type="text" placeholder="Type here" className="border-input" />
      </div>

      <div className="form-group">
        <label htmlFor="question">Choice</label>
        <div className="three-opts">
          <UnorderedListOutlined />
          <input type="text" placeholder="Type here" className="border-input" />
          <PlusOutlined />
        </div>
      </div>

      <div className="form-group">
        <div className="delete-save-option">
          <span className="delete-group">
            <CloseOutlined />
            <span className="delete-text">Delete question</span>
          </span>

          <Button className="save-button">Save</Button>
        </div>
      </div>

      <div className="form-group">
        <div className="row-title-opt">
          <span>Yes/No questions</span>
          <PlusOutlined />
        </div>

        <div className="additional-question-review remove-border">
          <span>Have you ever been rejected by the UK embassy?</span>
          <EditOutlined />
        </div>
      </div>
      <div className="add-question">
        <PlusOutlined className="thick-icon" />
        <span>Add a question</span>
      </div>
    </>
  );
};

export default AdditionalQuestions;
