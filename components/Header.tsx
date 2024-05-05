import React from "react";

interface headerProps {
  title: string;
  description: string;
  type?: string;
  user?: string;
}

const Header: React.FC<headerProps> = ({
  title = "",
  description = "",
  type = "",
  user = "",
}) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">{title}
      {type === "greeting" && (
        <span className="text-bankGradient">&nbsp;{user}</span>
      )}
      </h1>
      <p className="header-box-subtext">{description}</p>
    </div>
  );
};

export default Header;
