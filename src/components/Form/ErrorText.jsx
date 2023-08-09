/* eslint-disable react/prop-types */
const ErrorText = ({ children }) => {
  return (
    <>
      <p className="error__text">{children}</p>
    </>
  );
};

export default ErrorText;
