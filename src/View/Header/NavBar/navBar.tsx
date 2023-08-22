import "./navBar.css";
type Nav = {
  name: string;
};

export const NavBar = (props: Nav) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo"> {props.name} </div>
      <div className="nav-bar__menu">
        <div className="nav-bar__menu-item"> Home </div>
        <div className="nav-bar__menu-item"> About </div>
        <div className="nav-bar__menu-item">Calculator</div>
      </div>
    </div>
  );
};
