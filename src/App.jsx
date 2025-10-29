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
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmittedFormData(formData);
    setFormData(initialFormData);
  };

  const handleEdit = () => {
    if (submittedFormData) {
      setFormData(submittedFormData);
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <CvInfoFormBtns buttons={formDataButtons} onEdit={handleEdit} />
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
      {submittedFormData && <DisplayCv submittedFormData={submittedFormData} />}
    </>
  );
}

export default App;
