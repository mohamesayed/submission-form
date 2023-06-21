import "./App.css";
import PersonalInfo from "./component/PersonalInfo";
import SelectBox from "./component/select/SelectBox";
import Date from "./component/select/Date";

function App() {
  return (
    <>
      <PersonalInfo className="personal" />
      <Date />
    </>
  );
}

export default App;
