const Box = (props) => {
  const { text } = props;
  return <p> {text} </p>;
};

const element = (
  <div className="bg-container">
    <h1> Boxes </h1>
    <div className="box-container">
      <div className="small">
        <Box text="Small" />
      </div>
      <div className="medium">
        <Box text="Medium" />
      </div>
      <div className="large">
        <Box text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
