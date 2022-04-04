import "./Navigation.scss";

function Navigation() {
  return (
    <header className="navigation">
      <div className="inner">
        <div className="search">
          <input type="text" />
        </div>
        <button className="icon-button icon-home"></button>
        <button className="icon-button icon-alert"></button>
        <button className="icon-button icon-user"></button>
      </div>
    </header>
  );
}

export default Navigation;
