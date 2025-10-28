import { CvInfoForm } from "./components/CvInfo/CvInfoForm";
import { formData } from "./data/formData";
import { sectionData } from "./data/sectionData";
import { capitalizeFirstLetter } from "./data/utils";

function App() {
  return (
    <>
      {sectionData.map((section) => (
        <div key={section} className="cv-section">
          <h2>{capitalizeFirstLetter(section)}</h2>
          <CvInfoForm fields={formData.filter((field) => field.form === section)} />
        </div>
      ))}
    </>
  );
}

export default App;
