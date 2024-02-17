import { ReactElement } from "react";

type ButtonType = { title: string };

export const CreateButton = ({ title }: ButtonType): ReactElement => {
  return <input value={title} type="button" />;
};