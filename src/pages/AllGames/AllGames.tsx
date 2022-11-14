import "./AllGames.css";

const AllGamesPage = () => {
  return (
    <div className="all-games">
      <section className="all-games-section">
        <h1 className="">All Games</h1>
      </section>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            search
          </button>
        </div>
      </div>
      <section className="all-games-list"></section>
    </div>
  );
};

export default AllGamesPage;
