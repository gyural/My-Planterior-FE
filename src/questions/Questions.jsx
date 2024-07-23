import React, { useRef, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./multiQuestions_json";

const Questions = React.memo(({ updateProgress }) => {
  const currentRef = useRef(0);
  const survey = new Model(json);
  survey.applyTheme(themeJson);

  const handlePageChange = (sender, options) => {
    const currentPageIndex = sender.currentPageNo;
    const totalPages = sender.visiblePageCount;
    currentRef.current = ((currentPageIndex + 1) / totalPages) * 100;
    updateProgress(currentRef.current);
  };

  useEffect(() => {
    survey.onCurrentPageChanged.add(handlePageChange);

    return () => {
      survey.onCurrentPageChanged.remove(handlePageChange);
    };
  }, [survey]);

  return <Survey model={survey} />;
});

export default Questions;