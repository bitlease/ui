import React from 'react'

const Popup = (props) => {
  return props.trigger ? (
    <div className="fixed top-0 right-0 w-[100%] h-[100%] backdrop-blur-[0.1rem] z-10">
      {props.children}
    </div>
  ) : (
    ""
  );
};

export default Popup;