const trackingMyButtonComp = (Component) => {
  return (props) => {
    const handleClick = (Component) => {
      alert("the tracking info on clicking this button", props.trackingInfo.CustId);
    };
    return (
      <form onClick={handleClick}>
        email:
        <input type="text" /><br></br>
        password:
        <input type="text" /><br></br>
        <Component {...props} />
      </form>
    );
  };
};
export default trackingMyButtonComp;
