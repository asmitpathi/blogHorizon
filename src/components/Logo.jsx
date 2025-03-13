import React from 'react';

function Logo({ width = '70px' }) {
  return (
    <img
      src="/images/logo.jpg"
      alt="logo"
      style={{ width, height: 'auto' }} // Now width is controlled
    />
  );
}

export default Logo;
