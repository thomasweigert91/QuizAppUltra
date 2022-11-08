import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const BookmarkButton = ({ setPageState, pageState }) => {
  return (
    <FontAwesomeIcon
      icon={faBookmark}
      className={pageState === "Bookmark" ? "Button Button--Active" : "Button"}
      onClick={() => setPageState("Bookmark")}
    />
  );
};

export { BookmarkButton };
