/* eslint-disable @typescript-eslint/no-explicit-any */
// import Input from "../../UI/Input/Input";

import { DeleteOutlined } from "@ant-design/icons";

type ItemFormProps = {
  handleItemChange: any;
  item: any;
  itemData: any;
  handleRemove?: any;
  index: any;
};

const ItemForm = ({
  item,
  index,
  handleItemChange,
  handleRemove,
}: ItemFormProps) => {
  return (
    <>
      <section className="wrap-card-drop">
        <div className="card-drop-row">
          <h2 className="card-title-100">Questions</h2>
          {index > 0 && <DeleteOutlined onClick={() => handleRemove(index)} />}
        </div>
        <div>
          <label htmlFor="">Type</label>
          <br />
          <select
            id={"questionaire"}
            value={item.questionaire}
            onChange={(e: React.FormEvent) => handleItemChange(e, item)}
          >
            <option value="">Multiple choice</option>
            <option value="paragraph">Paragraph</option>
            <option value="short answer">Short answer</option>
            <option value="yes / no">Yes/No</option>
            <option value="dropdown">Dropdown</option>
            <option value="multiple choice">Multiple choice</option>
            <option value="date">Date</option>
            <option value="number">Number</option>
            <option value="file upload">File upload</option>
            <option value="video question">Video question</option>
          </select>
        </div>

      </section>
    </>
  );
};

export default ItemForm;
