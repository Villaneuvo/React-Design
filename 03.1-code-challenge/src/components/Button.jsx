import PropTypes from "prop-types";
import "../css/Button.css";

function Button(props) {
  return <button>{props.val}</button>;
}

Button.propTypes = {
  val: PropTypes.string.isRequired,
};

export default Button;
