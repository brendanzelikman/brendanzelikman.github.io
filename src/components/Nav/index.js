import "./index.css";

const Nav = ({ views, ids }) => {
  if (views.some((ref) => !ref)) return null;

  return (
    <div className="nav">
      {ids.map((id, i) => (
        <div
          key={id}
          id={`nav-${id}`}
          onClick={() => views[i].scrollIntoView()}
        ></div>
      ))}
    </div>
  );
};

export default Nav;
