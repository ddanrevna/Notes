import { NavLink } from "react-router-dom";

export default function Button({ $to, $text, $handleOnClick, $disabled }) {
  return (
    <NavLink to={$to}>
      <p className=" text-center">
        <button
          disabled={$disabled}
          onClick={$handleOnClick}
          className=" text-black bg-slate-200 shadow-md	rounded-md font-bold py-2 px-4 mt-5 mb-5"
        >
          {$text}
        </button>
      </p>
    </NavLink>
  );
}
