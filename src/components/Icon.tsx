import React from "react";

interface IconProps {
  children: string;
}
export const Icon = ({ children }: IconProps) => (
  <i className="material-icons">{children}</i>
);
