import React from 'react';

const Header = () => {
  const headerStyle = {
    textAlign: 'center'
  }
  return(
    <React.Fragment>
      <div style={headerStyle}>
        <img style={{maxWidth: '100%'}} src={require("../../img/tap-banner.jpg")} alt="banner" />
        <h1>The Tap Room</h1>
      </div>
    </React.Fragment>
  )
}

export default Header;