import WorkExpInputItem from "./WorkExpInputItem";

function WorkExpInput({ data, addWorkExp, removeWorkExp, updateWorkExp }) {
  return (
    <div className="work-experience-input-container">
      <h2>Work Experience</h2>
      <button onClick={addWorkExp}>Add</button>
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
    </div>
  );
}

export default WorkExpInput;
