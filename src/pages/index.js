import React, { useState } from "react";
import Layout from "../components/layout";
import Portfolio from "../components/Portfolio/portfolio";
import Cv from "../components/CV";

const IndexPage = () => {
  const [routeName, setRouteName] = useState(<Portfolio />);
  const switchComponent = (switchcomponent) => {
    switch (switchcomponent) {
      case "PORTFOLIO":
         setRouteName(<Portfolio />);
        break;
      case "C.V":
        setRouteName(<Cv />);
        break;
      default:
        setRouteName(<Portfolio />);
    }
  };
  return (
    <Layout switchCopt={switchComponent}>
      {routeName}
    </Layout>
  );
};

export default IndexPage;
