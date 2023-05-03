import React from "react";

function Menu({onDarkMode}) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={false}
          onChange={onDarkMode}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
