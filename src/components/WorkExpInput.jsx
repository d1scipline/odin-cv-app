import WorkExpInputItem from "./WorkExpInputItem";
import { List, Plus } from "lucide-react";

function WorkExpInput({ data, addWorkExp, removeWorkExp, updateWorkExp }) {
  return (
    <div className="work-experience-input-container">
      <div className="editor-title">
        <List></List>
        <h2>Work Experience</h2>
      </div>
      {data.length != 0 && (
        <div className="work-experience-input-items">
          {data.map((item) => (
            <WorkExpInputItem
              key={item.id}
              data={item}
              removeWorkExp={removeWorkExp}
              updateWorkExp={updateWorkExp}
            ></WorkExpInputItem>
          ))}
        </div>
      )}
      <button onClick={addWorkExp} className="add-button">
        <Plus></Plus>Add Entry
      </button>
    </div>
  );
}

export default WorkExpInput;
