import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./BookmarkButton.css";

const BookmarkButton = () => {
  return <FontAwesomeIcon icon={faBookmark} className="Button" />;
};

export { BookmarkButton };
