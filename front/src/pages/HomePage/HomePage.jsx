// import React from 'react'

// import Main from "../../components/Main/Main";
import Stories from "../../components/Stories/Stories";
import Testing from "../../Testing";
// import LatestNewsFromYt from "../LatestNewsFromYt/LatestNewsFromYt";

const HomePage = () => {
  return (
    <div className="xl:w-[80%] xl:m-auto">
      <Stories />

      {/* <LatestNewsFromYt /> */}
      <Testing />
    </div>
  );
};

export default HomePage;
