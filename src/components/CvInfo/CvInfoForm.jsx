import { useState } from "react";
import "./CvInfoForm.css";

export const CvInfoForm = ({ fields }) => {
  const initialFormData = Object.fromEntries(fields.map((field) => [field.name, ""]));

  const [formData, setFormData] = useState(initialFormData);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="cv-info-form" onSubmit={handleOnSubmit}>
      {fields.map(({ name, label, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}: </label>
          {type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleOnChange}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleOnChange}
            />
          )}
        </div>
      ))}
      <input type="submit" />
    </form>
  );
};
