import { ChangeEvent } from "react";

import btnImgUrl from "../Input/images/btn-send.png";

import "./FormInput.css";

export default function FormInput({
  blockName,
  onChangeHandler,
  callback,
  inputState,
}: {
  blockName: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  callback: () => void;
  inputState: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={blockName + "__form"}
    >
      <input
        value={inputState}
        onChange={onChangeHandler}
        className="form__input"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          callback();
        }}
        className="form__btn"
      >
        <img src={btnImgUrl} className="btn__logo" />
      </button>
    </form>
  );
}
