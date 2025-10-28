import { CvInfoForm } from "./components/CvInfo/CvInfoForm";

const formDataFields = [
  { name: "fullName", label: "Name", type: "text", form: "personal" },
  { name: "email", label: "Email", type: "email", form: "personal" },
  { name: "phoneNumber", label: "Phone Number", type: "tel", form: "personal" },
  { name: "schoolName", label: "School", type: "text", form: "education" },
  { name: "titleOfStudy", label: "Title of Study", type: "text", form: "education" },
  { name: "dateOfStudy", label: "Date of Study", type: "date", form: "education" },
  { name: "companyName", label: "Company Name", type: "text", form: "work" },
  { name: "positionTitle", label: "Position Title", type: "text", form: "work" },
  {
    name: "mainResponsibilities",
    label: "Main Responsibilities",
    type: "text",
    form: "work",
  },
  { name: "startDate", label: "Start Date", type: "date", form: "work" },
  { name: "endDate", label: "End Date", type: "date", form: "work" },
];

function App() {
  return (
    <>
      <CvInfoForm
        formDataFields={formDataFields.filter((field) => field.form === "personal")}
      />
      <CvInfoForm
        formDataFields={formDataFields.filter((field) => field.form === "education")}
      />
      <CvInfoForm
        formDataFields={formDataFields.filter((field) => field.form === "work")}
      />
    </>
  );
}

export default App;
