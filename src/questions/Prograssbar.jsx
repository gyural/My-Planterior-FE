import React, { useEffect, useState } from 'react';

const Prograssbar = React.memo(({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(progress);
  }, [progress]);

  return (
    <div className="bg-gray-200 rounded-full">
      <div
        className="bg-green-600 text-xs font-semibold text-neutral-900 p-1 leading-none rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${animatedProgress}%` }}
      >
        {`${animatedProgress}%`}
      </div>
    </div>
  );
});

export default Prograssbar;