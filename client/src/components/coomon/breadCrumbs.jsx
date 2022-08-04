import React from "react";
import { Link, useLocation } from "react-router-dom";

const BradCrumbs = ({ data }) => {
  const location = useLocation().pathname;
  return (
    <ul className="bradCrumbs__list">
      {location
        .split("/")
        .slice(0, -1)
        .map((path, index) => (
          <li key={index} className="bradCrumbs__item">
            {data[path].pathName ? (
              <Link to={data[path].pathName}>{data[path].value}</Link>
            ) : (
              <p>{data[path].value}</p>
            )}
          </li>
        ))}
    </ul>
  );
};

export default BradCrumbs;
