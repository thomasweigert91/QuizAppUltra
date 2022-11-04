import "./Navigation.css";
import { AddButton } from "./Navigation-Items/AddButton/AddButton";
import { ProfileButton } from "./Navigation-Items/ProfileButton/ProfileButton";
import { HomeButton } from "./Navigation-Items/HomeButton/HomeButton";
import { BookmarkButton } from "./Navigation-Items/BookmarkButton/BookmarkButton";

const Navigation = () => {
  return (
    <div className="Navigation">
      <HomeButton />
      <AddButton />
      <BookmarkButton />
      <ProfileButton />
    </div>
  );
};

export { Navigation };
