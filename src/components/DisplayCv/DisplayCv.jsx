import { formDataFields, formSectionData } from "../../data/formData";
import { capitalizeFirstLetter } from "../../data/utils";
import "./DisplayCv.css";

export const DisplayCv = ({ formData }) => {
  return (
    <div className="display-cv">
      {formSectionData.map((section) => {
        const fields = formDataFields.filter(({ form }) => form === section);
        return (
          <section key={section} className="cv-section-display">
            <h2>{capitalizeFirstLetter(section)}</h2>
            {fields.map(({ name, type, label }) => {
              const value = formData[name];
              if (type === "textarea") {
                return (
                  <p key={name} className="cv-textarea">
                    <strong>{label}:</strong> {value}
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
