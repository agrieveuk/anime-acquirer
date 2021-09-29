import React from 'react';

const Header = () => {
  return (
    <div>
      <img className="ghibli-logo" src="/ghibli.png" alt="ghibli-logo" />
      <h1>the anime acquirer</h1>
      <h2>
        (ﾉ◕ヮ◕)ﾉ<span className="stars">*:･ﾟ✧</span>
      </h2>
      <p className="tagline">search for your favourite ghibili film with disney's API !!</p>
    </div>
  );
};

export default Header;