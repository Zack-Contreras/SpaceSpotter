import React from "react";

interface IPageHeader {
  title: string;
  description?: string;
}
function PageHeader({ title, description }: IPageHeader) {
  return (
    <div className="page-title">
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PageHeader;
