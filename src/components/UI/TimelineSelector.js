import React from 'react'

const TimelineSelector = (props) => {
  const isActive = (option) => {
    return option.value === props.selectedValue;
  };

  return (
    <div className="timeline-selector">
      {props.options.map((option) => (
        <button
          key={option.value}
          value={option.value}
          className={`btn timeline-button btn-sm margin-right-10 ${isActive(option) && 'timeline-button-active '}`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default TimelineSelector;
