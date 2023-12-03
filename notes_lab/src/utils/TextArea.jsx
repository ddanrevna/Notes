import React from "react";

export default function TextArea({ $placeholder, $onDataChange }) {
  return (
    <textarea
      onChange={(e) => $onDataChange(e.target.value)}
      rows="4"
      className="block p-2.5 mt-5 w-8/12 mr-auto ml-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={$placeholder}
    ></textarea>
  );
}
