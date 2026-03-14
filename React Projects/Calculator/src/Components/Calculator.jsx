import Display from "./Display";
import ButtonContainer from "./ButtonContainer";

function Calculator() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="bg-light border rounded-4 shadow p-4"
        style={{ width: "380px" }}
      >
        <Display />
        <ButtonContainer />
      </div>
    </div>
  );
}

export default Calculator;