import React, { useState } from "react";
import "../Styles/form.css";

const LeftPanel = ({
  formField,
  setFormField = () => {},
  setFormData = () => {},
  formData,
}) => {
  const [label, setLabel] = useState("");
  const [inpType, setInpType] = useState("text");
  const [dropdownList, setDropdownList] = useState([]);
  const [option, setOption] = useState("");
  const [radioOption, setRadioOption] = useState([]);
  const [rOption, setROption] = useState("");

  const addOption = () => {
    dropdownList.push(option);
    setDropdownList(dropdownList);
    setOption("");
  };
  const rdOption = () => {
    setRadioOption([...radioOption, rOption]);
    setROption("");
  };

  const addFieldOption = () => {
    const opn = {
      label: label,
      inputType: inpType,
      dropdownList: dropdownList,
      radioOption: radioOption,
    };
    formData[label] = "";
    setFormData({ ...formData });
    setFormField([...formField, opn]);
    setLabel("");
    setInpType("text");
    setDropdownList([]);
  };

  return (
    <div className="leftPanelWrapper">
      <label className="titleLabel">Add Form Field</label>
      <div className="inputWrapper">
        <label className="inputLabel">Enter Input label:</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        ></input>
      </div>
      <div className="inputWrapper">
        <label className="inputLabel">Select input type:</label>
        <select onChange={(e) => setInpType(e.target.value)} value={inpType}>
          <option value="text">Text Input</option>
          <option value="textarea">Text Area</option>
          <option value="dropdown">Dropdown</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio Button</option>
          <option value="fileUpload">File Upload</option>
        </select>
      </div>
      {inpType === "radio" ? (
        <>
          <div className="inputWrapper">
            <label>Add radio option:</label>
            <input
              type="text"
              value={rOption}
              onChange={(e) => setROption(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={() => rdOption()}>Add option</button>
          </div>
          {radioOption.length ? (
            <div className="inputWrapper">
              <label>Radio list options:</label>
              {radioOption.map((listItem, index) => (
                <div key={index}>{listItem}</div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {inpType === "dropdown" ? (
        <>
          <div className="inputWrapper">
            <label>Add dropdown list option:</label>
            <input
              type="text"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={() => addOption()}>Add option</button>
          </div>
          {dropdownList.length ? (
            <div className="inputWrapper">
              <label>Dropdown list options:</label>
              {dropdownList.map((listItem, index) => (
                <div key={index}>{listItem}</div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      <div>
        <button className="submitButton" onClick={() => addFieldOption()}>
          Add Field
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
