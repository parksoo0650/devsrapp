import { useState } from 'react';

const useTabs = (initialIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentTab: allTabs[currentIndex],
    setCurrentIndex,
  };
};

export default useTabs;
