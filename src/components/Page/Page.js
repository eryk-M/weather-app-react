import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Search from "../../Pages/Search/Search";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </>
  );
};

export default Page;
