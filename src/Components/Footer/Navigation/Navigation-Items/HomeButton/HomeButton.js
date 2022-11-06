import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./HomeButton.css";

function HomeButton({ pageState, setPageState }) {
  console.log(pageState);
  return (
    <FontAwesomeIcon
      icon={faHouse}
      onClick={() => setPageState("Home")}
      className="Button"
    />
  );
}

export { HomeButton };
