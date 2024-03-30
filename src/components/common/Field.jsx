import React from "react";

const Field = ({ label, children, error, htmlFor }) => {
  return (
    <div className=" mb-2">
      {label && (
        <label htmlFor={htmlFor ?? getChildId(children)} className="block mb-2">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role=" alert" className=" text-red-600">
          {error?.message}
        </div>
      )}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child?.props?.id;
  }
};

export default Field;
