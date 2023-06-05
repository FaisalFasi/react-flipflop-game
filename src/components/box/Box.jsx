// import "./box.css";
const Box = (props) => {
  const handleClick = () => {
    props.clickHandler(props.id);
  };

  return (
    <div>
      {/* <img src="./img/img-11.jpg" alt="" /> */}

      {!props.isClicked ? (
        <div className="w-16 h-16 bg-red-300 m-2" onClick={handleClick}></div>
      ) : (
        <div className="w-16 h-16 bg-blue-300 m-2">
          <img src={props.imgSrc} alt="" />
          {props.value}
        </div>
      )}
    </div>
  );
};
export default Box;
