import React from "react";

interface IPageHeader {
  title: string | React.ReactNode;
  description?: string;
}
function PageHeader({ title, description }: IPageHeader) {
  return (
    <div className="page-title">
      <h1 data-testid="page-header" className="text-2xl font-bold">
        {title}
      </h1>
      {description && <p data-testid="page-description">{description}</p>}
    </div>
  );
}

export default PageHeader;
