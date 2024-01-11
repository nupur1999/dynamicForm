import React, { useState } from "react";
import "../Styles/form.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Form = () => {
  const [formField, setFormField] = useState([]);
  const [formData, setFormData] = useState({});
  return (
    <div className="mainWrapper">
      <div className="leftPanel">
        <LeftPanel
          formField={formField}
          setFormField={setFormField}
          setFormData={setFormData}
          formData={formData}
        />
      </div>
      <div className="rightPanel">
        <RightPanel formField={formField} formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
};

export default Form;
