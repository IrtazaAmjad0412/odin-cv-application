import { useState } from "react";

export const CvInfoForm = ({ formDataFields }) => {
  const initialFormData = Object.fromEntries(
    formDataFields.map((field) => [field.name, ""])
  );

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
    <div>
      <form className="cv-info-form" onSubmit={handleOnSubmit}>
        {formDataFields.map(({ name, label, type }) => (
          <div key={name}>
            <label htmlFor={name}>{label}: </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleOnChange}
            />
          </div>
        ))}
        <input type="submit" />
      </form>
    </div>
  );
};
