import {
  CheckBadgeIcon,
  ClipboardIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const BtnCopy = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 xl:w-20 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-primary-surface outline-none"
    >
      <ClipboardIcon className="icon20" />
      <span className="hidden xl:block">Copy</span>
    </button>
  );
};

export const BtnCopied = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 xl:w-20 text-sm font-medium text-neutral-600 dark:border-neutral-600 dark:text-primary-surface outline-none"
    >
      <CheckBadgeIcon className="icon20 text-primary-main dark:text-sky-300" />
      <span className="hidden xl:block">Udah ya</span>
    </button>
  );
};

export const TabPreviewActive = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium bg-white text-neutral-900 py-1.5 px-3 shadow rounded-md transition-all dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-none"
    >
      <EyeIcon className="icon20 text-primary-main dark:text-sky-300" />
      <span className="hidden xl:block">Preview</span>
    </button>
  );
};
export const TabPreviewInactive = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium text-neutral-400 py-1.5 px-3 rounded-md transition-all dark:text-neutral-500"
    >
      <EyeIcon className="icon20" />
      <span className="hidden xl:block">Preview</span>
    </button>
  );
};
export const TabCodeActive = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium bg-white text-neutral-900 py-1.5 px-3 shadow rounded-md transition-all dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-none"
    >
      <CodeBracketIcon className="icon20 text-primary-main dark:text-sky-300" />
      <span className="hidden xl:block">Code</span>
    </button>
  );
};
export const TabCodeInactive = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium text-neutral-400 py-1.5 px-3 rounded-md transition-all dark:text-neutral-500"
    >
      <CodeBracketIcon className="icon20" />
      <span className="hidden xl:block">Code</span>
    </button>
  );
};
