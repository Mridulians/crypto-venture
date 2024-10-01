// import React from 'react'

// import Main from "../../components/Main/Main";
import Stories from "../../components/Stories/Stories";
import LatestNewsFromYt from "../LatestNewsFromYt/LatestNewsFromYt";

const HomePage = () => {
  return (
    <div className="xl:w-[80%] xl:m-auto">
      <Stories />

      <LatestNewsFromYt />
    </div>
  );
};

export default HomePage;
