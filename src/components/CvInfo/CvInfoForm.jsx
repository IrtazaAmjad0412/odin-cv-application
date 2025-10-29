import "./CvInfoForm.css";

export const CvInfoForm = ({ fields, formData, setFormData }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="cv-info-form">
      {fields.map(({ name, label, type }) => (
        <div key={name} className="input-group">
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
    </div>
  );
};
