import { CvInfoForm } from "./components/CvInfo/CvInfoForm";
import { formData } from "./data/formData";
import { sectionData } from "./data/sectionData";

function App() {
  return (
    <>
      {sectionData.map((section) => (
        <div key={section} className="cv-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <CvInfoForm fields={formData.filter((field) => field.form === section)} />
        </div>
      ))}
    </>
  );
}

export default App;
