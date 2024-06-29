const Alert = (props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {props.text}

      <button
        type="button"
        className="btn-close"
        onClick={props.onClose}
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
