import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./HomeButton.css";

const HomeButton = () => {
  return <FontAwesomeIcon icon={faHouse} className="Button" />;
};

export { HomeButton };
