import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import "./AddButton.css";

const AddButton = ({ setPageState }) => {
  return (
    <FontAwesomeIcon
      icon={faAdd}
      className="Button"
      onClick={() => setPageState("Add")}
    />
  );
};

export { AddButton };
