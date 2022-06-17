import React, { ReactNode } from "react";

type IconWithTextProps = {
  Icon: ReactNode;
  text?: string;
};

export const IconWithText = ({ Icon, text }: IconWithTextProps) => {
  return (
    <div
      className="icon-with-text"
      style={{ display: "flex", alignItems: "center", gap: 4 }}
    >
      {Icon}
      {text}
    </div>
  );
};
