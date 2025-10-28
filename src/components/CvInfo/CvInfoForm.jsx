import "./CvInfoForm.css";

export const CvInfoForm = ({ fields, formData, setFormData }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(formData);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="cv-info-form" onSubmit={handleOnSubmit}>
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
    </form>
  );
};
