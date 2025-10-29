import { useState } from "react";
import { CvInfoForm } from "./components/CvInfo/CvInfoForm";
import { CvInfoFormBtns } from "./components/CvInfoFormBtns/CvInfoFormBtns";
import { DisplayCv } from "./components/DisplayCv/DisplayCv";
import { formDataFields, formSectionData, formDataButtons } from "./data/formData";
import { capitalizeFirstLetter } from "./data/utils";

function App() {
  const initialFormData = Object.fromEntries(
    formDataFields.map(({ name }) => [name, ""])
  );

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <CvInfoFormBtns buttons={formDataButtons} />
        {formSectionData.map((section) => (
          <div key={section} className="cv-section">
            <h2>{capitalizeFirstLetter(section)}</h2>
            <CvInfoForm
              fields={formDataFields.filter(({ form }) => form === section)}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        ))}
      </form>
      {isSubmitted && <DisplayCv formData={formData} />}
    </>
  );
}

export default App;
