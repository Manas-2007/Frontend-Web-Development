import Button from "./Button";

function ButtonContainer() {
  return (
    <div className="container mt-3">
      <div className="row ">

        <Button value="C" />
        <Button value="1" />
        <Button value="2" />

        <Button value="+" />
        <Button value="3" />
        <Button value="4" />

        <Button value="-" />
        <Button value="5" />
        <Button value="6" />

        <Button value="*" />
        <Button value="7" />
        <Button value="8" />

        <Button value="/" />
        <Button value="=" />
        <Button value="9" />

        <Button value="0" />
        <Button value="." />

      </div>
    </div>
  );
}

export default ButtonContainer;