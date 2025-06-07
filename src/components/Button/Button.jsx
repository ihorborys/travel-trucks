const Button = ({ handleOnClick, className, children }) => {
  return (
    <button className={className} onClick={handleOnClick}>
      {children}
    </button>
  );
};
export default Button;
