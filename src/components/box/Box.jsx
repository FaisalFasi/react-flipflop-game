const Box = (props) => {
  const handleClick = () => {
    props.clickHandler(props.id);
  };

  return (
    <div>
      {!props.isClicked ? (
        <div className="w-16 h-16 bg-blue-500 m-2" onClick={handleClick}></div>
      ) : (
        <div className="w-16 h-16 bg-blue-300 m-2">
          <img src={props.imgSrc} alt="" className=" w-16 h-16" />
          {/* {props.value} */}
        </div>
      )}
    </div>
  );
};
export default Box;
