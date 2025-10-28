import { useState } from "react";
import { CvInfoForm } from "./components/CvInfo/CvInfoForm";
import { CvInfoFormBtns } from "./components/CvInfoFormBtns/CvInfoFormBtns";
import { formDataFields, formSectionData, formDataButtons } from "./data/formData";
import { capitalizeFirstLetter } from "./data/utils";

function App() {
  const initialFormData = Object.fromEntries(
    formDataFields.map((field) => [field.name, ""])
  );

  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <CvInfoFormBtns buttons={formDataButtons} />
      {formSectionData.map((section) => (
        <div key={section} className="cv-section">
          <h2>{capitalizeFirstLetter(section)}</h2>
          <CvInfoForm
            fields={formDataFields.filter((field) => field.form === section)}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      ))}
    </>
  );
}

export default App;
