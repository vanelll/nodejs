import React from "react";
import {Link} from "react-router-dom"

export default () => (
  <header>
    {
      <ul>
        <li>
          <Link to="/">Prices</Link>
        </li>
        <li>
          <Link to="/ex">Exchanges</Link>
        </li>
        <li>
          <Link to="/coin">Coins</Link>
        </li>
      </ul>
    }
  </header>
);

/**
 * https://reacttraining.com/react-router/web/example/url-params
 * link
 */
