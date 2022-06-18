import { isLoad } from "helpers/GlobalState/CmRouterSlice";
import { changepath } from "helpers/GlobalState/CmRouterSlice";
import React from "react";
import { useDispatch } from "react-redux";

const CLink = ({ to, children, className }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(isLoad(true));
    setTimeout(() => {
      // @ts-ignore
      dispatch(isLoad(false));
      dispatch(changepath(to));
    }, 500);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default CLink;
