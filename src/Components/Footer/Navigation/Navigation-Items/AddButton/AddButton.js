import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const AddButton = ({ setPageState, pageState }) => {
  return (
    <FontAwesomeIcon
      icon={faAdd}
      className={pageState === "Add" ? "Button Button--Active" : "Button"}
      onClick={() => setPageState("Add")}
    />
  );
};

export { AddButton };
