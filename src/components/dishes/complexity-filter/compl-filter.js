import React from "react";

import "./compl-filter.css";

const ComplFilter = ({ onDifficultyFilter, dfilter }) => {
  const a = [1, 2, 3, 4, 5];
  const elements = a.map((id) => {
    const cls = id <= dfilter ? "star-filter-active" : "star-filter";
    return (
      <button
        key={id}
        className="star-filter-button"
        onClick={() => onDifficultyFilter(id)}
      >
        <span className={cls}></span>
      </button>
    );
  });
  return <div className="rating-stars">{elements}</div>;
};
export default ComplFilter;
