import "./Body.css";
import { Bookmark } from "./Bookmark/Bookmark";
import { Home } from "./Home/Home";
import { StartPage } from "./Startpage/Startpage";
import { Add } from "./Add/Add";
import { ProfilePage } from "./Profile/Profile";

function Body({ pageState, setPageState }) {
  if (pageState === "Startpage") {
    return (
      <section className="body__container">
        <StartPage setPageState={setPageState} />
      </section>
    );
  } else if (pageState === "Home") {
    return (
      <section className="body__container">
        <Home />
      </section>
    );
  } else if (pageState === "Bookmark") {
    return (
      <section className="body__container">
        <Bookmark />
      </section>
    );
  } else if (pageState === "Add") {
    return (
      <section className="body__container">
        <Add />
      </section>
    );
  } else if (pageState === "Profile") {
    return (
      <section className="body__container">
        <ProfilePage />
      </section>
    );
  }
}

export { Body };
