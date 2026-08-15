import EducationInput from "./EducationInput";
import PersonalInfoInput from "./PersonalInfoInput";
import SkillsInput from "./SkillsInput";
import WorkExpInput from "./WorkExpInput";

function Editor({ data, setData }) {
  const updatePersonalInfo = (key, info) => {
    setData({ ...data, personalInfo: { ...data.personalInfo, [key]: info } });
  };

  const addWorkExp = () => {
    setData((prevData) => ({
      ...prevData,
      workExp: [
        ...(prevData.workExp || []),
        {
          companyName: "",
          jobTitle: "",
          startDate: null,
          endDate: null,
          respon: "",
          id: crypto.randomUUID(),
        },
      ],
    }));
  };

  const removeWorkExp = (id) => {
    setData((prevData) => ({
      ...prevData,
      workExp: [...prevData.workExp.filter((item) => item.id !== id)],
    }));
  };

  const updateWorkExp = (id, key, data) => {
    setData((prevData) => ({
      ...prevData,
      workExp: prevData.workExp.map((item) =>
        item.id === id ? { ...item, [key]: data } : item,
      ),
    }));
  };

  const addEducation = () => {
    setData((prevData) => ({
      ...prevData,
      education: [
        ...(prevData.education || []),
        {
          degree: "",
          university: "",
          startDate: null,
          endDate: null,
          id: crypto.randomUUID(),
        },
      ],
    }));
  };

  const removeEducation = (id) => {
    setData((prevData) => ({
      ...prevData,
      education: [...prevData.education.filter((item) => item.id !== id)],
    }));
  };

  const updateEducation = (id, key, data) => {
    setData((prevData) => ({
      ...prevData,
      education: prevData.education.map((item) =>
        item.id === id ? { ...item, [key]: data } : item,
      ),
    }));
  };

  const addSkill = (skill) => {};

  return (
    <div className="editor">
      <h1>Editor</h1>
      <PersonalInfoInput
        data={data}
        updatePersonalInfo={updatePersonalInfo}
      ></PersonalInfoInput>
      <WorkExpInput
        data={data.workExp}
        addWorkExp={addWorkExp}
        removeWorkExp={removeWorkExp}
        updateWorkExp={updateWorkExp}
      ></WorkExpInput>
      <EducationInput
        data={data.education}
        addEducation={addEducation}
        removeEducation={removeEducation}
        updateEducation={updateEducation}
      ></EducationInput>
      <SkillsInput data={data.skills} addSkill={addSkill}></SkillsInput>
    </div>
  );
}

export default Editor;
