import React, { useRef, useState, useCallback } from 'react';
import Questions from './Questions';
import Prograssbar from './Prograssbar';

const SurveyPage = () => {
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(progressRef.current);
  const bannerHeight = '400px';

  const updateProgress = useCallback((value) => {
    progressRef.current = Math.round(value * 10)/10;
    setProgress(progressRef.current);
  }, []);
  return (
    <div className='relative'>
      <div
        className={`h-[400px] bg-cover bg-center`}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/survey_background.png)` }}
      >
        <div className="pt-[340px] flex justify-center items-center">
          <div className="w-[840px]">
            <div className="bg-[#f3f3f3] text-center pt-[40px] px-[108px] text-4xl font-bold">
              <div className='flex items-center gap-4 mb-6'>
                <div
                  className='w-[70px] h-[70px] bg-no-repeat bg-center bg-contain'
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/logo.png)` }}
                ></div>
                맞춤형 식물을 위한 설문지
              </div>
              <Prograssbar progress={progress} />
            </div>
            <Questions updateProgress={updateProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;