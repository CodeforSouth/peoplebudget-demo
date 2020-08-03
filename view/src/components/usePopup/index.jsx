import { useState } from 'react';

const usePopup = () => {
  const [isShowing, setIsShowing] = useState(true);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default usePopup;