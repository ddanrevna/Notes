import React from "react";

export default function Input({
  $type,
  $placeholder,
  $onDataChange,
  $required,
}) {
  return (
    <input
      type={$type}
      className="block w-8/12 ml-auto mr-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={$placeholder}
      onChange={(e) => $onDataChange(e.target.value)}
      required={$required}
    />
  );
}
