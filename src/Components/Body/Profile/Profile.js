import "./Profile.css";
import profilePicture from "../../../assets/69c.png";

const ProfilePage = () => {
  return (
    <>
      <section className="ProfilePage__Container">
        <div className="ProfilePage__User">
          <img
            src={profilePicture}
            alt="profilepicture"
            className="ProfilePage__Picture"
          ></img>
          <h2 className="ProfilePage__UserName">John Doe</h2>
        </div>
        <p className="ProfilePage__Text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </section>
    </>
  );
};

export { ProfilePage };
