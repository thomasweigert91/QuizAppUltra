import "./Navigation.css";
import { AddButton } from "./Navigation-Items/AddButton/AddButton";
import { ProfileButton } from "./Navigation-Items/ProfileButton/ProfileButton";
import { HomeButton } from "./Navigation-Items/HomeButton/HomeButton";
import { BookmarkButton } from "./Navigation-Items/BookmarkButton/BookmarkButton";

const Navigation = ({ pageState, setPageState }) => {
  return (
    <div className="Navigation">
      <HomeButton pageState={pageState} setPageState={setPageState} />
      <AddButton pageState={pageState} setPageState={setPageState} />
      <BookmarkButton pageState={pageState} setPageState={setPageState} />
      <ProfileButton pageState={pageState} setPageState={setPageState} />
    </div>
  );
};

export { Navigation };
