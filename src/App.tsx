import React from "react";
import GlobalStyles from "./styles/globalStyles";
import Layout from "./components/Layout";
import Pannel from "./components/Pannel"
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Pannel radius={[0,0,0,0]}/>
      </Layout>
    </>
  );
};

export default App;
