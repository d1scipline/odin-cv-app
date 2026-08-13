import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    workExp: [],
    education: [],
    skills: [],
  });
  return (
    <>
      <Editor data={cvData} setData={setCvData}></Editor>
      <Preview data={cvData}></Preview>
    </>
  );
}

export default App;
