import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/">🏷</Link>
      </li>
      <li>
        <Link to="/exchanges">🔁</Link>
      </li>
      <li>
        <Link to="/coins">💰</Link>
      </li>
    </ul>
  </header>
);

/**
 * https://reacttraining.com/react-router/web/example/url-params
 * link
 */
