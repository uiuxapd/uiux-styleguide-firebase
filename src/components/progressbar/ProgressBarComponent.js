import { React, useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

export const DefaultProgressBar = (props) => {
  const { percentage, type, className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={`${className} w-full h-3 rounded-full overflow-hidden bg-primary-border shadow-inner`}
    >
      <div
        className="h-full rounded-full bg-primary-main"
        style={{
          width: `${percentage}%`,
          transition: "width 0.2s ease-in-out",
        }}
      />
    </div>
  );
};

export const ProgressBarWithText = () => {
  const [progress, setProgress] = useState(10);
  const handleProgress = () => {
    const frequency = (1 * 1000) / 100;
    let defaultState = 20;
    const interval = setInterval(() => {
      if (defaultState >= 100) clearInterval(interval);
      setProgress(defaultState);
      defaultState++;
    }, frequency);
  };
  return (
    <>
      <div className="flex w-full justify-end">
        <div class="group relative inline-block">
          <button
            className="p-2 rounded-lg focus:ring-4 focus:ring-neutral-200 text-neutral-400 dark:ring-neutral-600"
            onClick={handleProgress}
          >
            <PlayIcon className="icon24" />
          </button>
          <div class="tooltip-top">Click me baby</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <span className="font-medium text-primary-main dark:text-white">
            Uploading <span className="animate-pulse">...</span>
          </span>
          <span className="font-medium text-primary-main dark:text-white">
            {progress}%
          </span>
        </div>
        <div className="bg-primary-border h-3 rounded-full shadow-inner">
          <div
            className="bg-primary-main h-full rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};
