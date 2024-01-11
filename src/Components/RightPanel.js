import React from "react";
import "../Styles/form.css";

const RightPanel = ({ formField, formData, setFormData }) => {
  const updateFormData = (label, value) => {
    formData[label] = value;
    setFormData({ ...formData });
  };

  const getFormField = (field) => {
    switch (field.inputType) {
      case "text":
        return (
          <div className="formField">
            <label className="inputLabel">{field.label}:</label>
            <input
              type="text"
              onChange={(e) => updateFormData(field.label, e.target.value)}
              required
            ></input>
          </div>
        );
      case "textarea":
        return (
          <div className="formField">
            <label className="inputLabel">{field.label}:</label>
            <textarea
              type="textarea"
              onChange={(e) => updateFormData(field.label, e.target.value)}
              required
            ></textarea>
          </div>
        );

      case "dropdown":
        return (
          <div className="formField">
            <label className="inputLabel">{field.label}:</label>
            <select
              onChange={(e) => updateFormData(field.label, e.target.value)}
              required
            >
              {field.dropdownList.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      case "radio":
        return (
          <div className="formField">
            <label className="inputLabel">{field.label}:</label>
            <div>
              {field?.radioOption?.map((item) => (
                <div style={{ display: "flex" }}>
                  <input
                    type="radio"
                    name={field.label}
                    value={item}
                    onChange={(e) =>
                      updateFormData(field.label, e.target.defaultValue)
                    }
                    required
                  ></input>
                  <label>{item}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case "checkbox":
        return (
          <div className="formField">
            <label className="inputLabel">{field.label}:</label>
            <div>
              <input
                type="checkbox"
                onChange={(e) => updateFormData(field.label, e.target.checked)}
                required
              ></input>
              <label>{field.label}:</label>
            </div>
          </div>
        );
      case "fileUpload":
        return (
          <div className="formField">
            <label className="inputLabel">{field.label}:</label>
            <input
              type="file"
              onChange={(e) => updateFormData(field.label, e.target.files[0])}
              required
            ></input>
          </div>
        );
      default:
        return null;
    }
  };

  const validateData = () => {
    const values = Object.values(formData);
    const filteredList = values.filter((val) => val === "");
    if (filteredList.length) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmitClick = () => {
    if (validateData()) {
      const blob = new Blob([JSON.stringify(formData)], { type: "text/json" });
      const a = document.createElement("a");
      a.download = "formData.json";
      a.href = window.URL.createObjectURL(blob);
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      a.dispatchEvent(clickEvent);
      a.remove();
    } else {
      alert("Enter all form details");
    }
  };

  return (
    <div className="rightPanelWrapper">
      <label className="titleLabel">Application Form</label>
      <div className="formWrapper">
        {formField.map((field) => {
          return getFormField(field);
        })}
      </div>
      {formField.length ? (
        <div>
          <button className="submitButton" onClick={() => onSubmitClick()}>
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RightPanel;
