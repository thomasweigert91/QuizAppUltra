import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import "./ProfileButton.css";

function ProfileButton({ pageState, setPageState }) {
  return (
    <FontAwesomeIcon
      icon={faPortrait}
      onClick={() => setPageState("Profile")}
      className={pageState === "Profile" ? "Button Button--Active" : "Button"}
    />
  );
}

export { ProfileButton };
