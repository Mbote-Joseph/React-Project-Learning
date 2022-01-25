import React from "react";

const Main = () => {
  return (
    <div>
      <form className="form">
        <div className="input-fields">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button type="submit">Get a new meme image 🖼</button>
      </form>
    </div>
  );
};

export default Main;
