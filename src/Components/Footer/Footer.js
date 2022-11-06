import "./Footer.css";
import { Navigation } from "./Navigation/Navigation";

const Footer = ({ pageState, setPageState }) => {
  return (
    <section className="Footer">
      <Navigation pageState={pageState} setPageState={setPageState} />
    </section>
  );
};

export { Footer };
