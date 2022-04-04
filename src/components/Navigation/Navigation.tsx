import "./Navigation.scss";

function Navigation() {
  return (
    <header className="navigation">
      <div className="search">
        <input type="text" />
      </div>
      <button className="icon-button icon-home"></button>
      <button className="icon-button icon-alert"></button>
      <button className="icon-button icon-user"></button>
    </header>
  );
}

export default Navigation;
