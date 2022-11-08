import "./Startpage.css";

const StartPage = (setPageState) => {
  return (
    <>
      <section className="StartPage__Container">
        <div className="StartPage__Button" onClick={() => setPageState("Home")}>
          Start
        </div>
      </section>
    </>
  );
};

export { StartPage };
