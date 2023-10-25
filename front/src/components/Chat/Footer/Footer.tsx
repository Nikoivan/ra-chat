import "./Footer.css";

import { ChangeEvent } from "react";
import FormInput from "../../Form/Input/FormInput";

export default function Footer({
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
    <footer className={blockName + "__footer"}>
      <FormInput {...{ blockName, onChangeHandler, callback, inputState }} />
    </footer>
  );
}
