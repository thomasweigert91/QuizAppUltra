import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import "./ProfileButton.css";

const ProfileButton = () => {
  return <FontAwesomeIcon icon={faPortrait} className="Button" />;
};

export { ProfileButton };
