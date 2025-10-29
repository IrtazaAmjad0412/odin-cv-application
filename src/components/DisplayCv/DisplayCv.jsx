import { formDataFields, formSectionData } from "../../data/formData";
import { capitalizeFirstLetter, formatDate } from "../../data/utils";
import "./DisplayCv.css";

export const DisplayCv = ({ submittedFormData }) => {
  return (
    <div className="display-cv">
      {formSectionData.map((section) => {
        const fields = formDataFields.filter(({ form }) => form === section);
        return (
          <section key={section} className="cv-section-display">
            <h2>{capitalizeFirstLetter(section)}</h2>
            {fields.map(({ name, type, label }) => {
              const value = submittedFormData[name];
              if (type === "textarea") {
                return (
                  <p key={name} className="cv-textarea">
                    <strong>{label}:</strong> {value}
                  </p>
                );
              }
              if (type === "date") {
                return (
                  <p key={name} className="cv-field">
                    <strong>{label}:</strong> {formatDate(value)}
                  </p>
                );
              }
              return (
                <p key={name} className="cv-field">
                  <strong>{label}:</strong> {value}
                </p>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};
