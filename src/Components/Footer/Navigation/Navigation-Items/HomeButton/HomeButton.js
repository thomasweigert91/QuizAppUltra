import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function HomeButton({ pageState, setPageState }) {
  console.log(pageState);
  return (
    <FontAwesomeIcon
      icon={faHouse}
      onClick={() => setPageState("Home")}
      className={pageState === "Home" ? "Button Button--Active" : "Button"}
    />
  );
}

export { HomeButton };
