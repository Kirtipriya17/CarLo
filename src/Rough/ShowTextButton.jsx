import React, { useState } from 'react';

function ShowTextButton() {
  // State to track whether the text should be shown or not
  const [showText, setShowText] = useState(false);

  return (
    <div>
      {/* Button */}
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      
      {/* Text that will be displayed */}
      {showText && <p>Here is the text that appears when the button is clicked!</p>}
    </div>
  );
}

export default ShowTextButton;
