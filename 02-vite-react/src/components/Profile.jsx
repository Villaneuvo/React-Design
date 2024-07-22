import PropTypes from "prop-types";

function Profile(props) {
  return (
    <p>
      I am {props.name} and my email {props.email}
    </p>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Profile;
