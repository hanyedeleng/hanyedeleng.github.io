import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { createDarkTheme, createLightTheme } from "@fluentui/react-components";

import Home from "./pages/Home";
import Header from "./sharedComponents/Header";
import "./App.scss";

// https://react.fluentui.dev/?path=/docs/theme-theme-designer--page
// key color value: #507300
const gxBlogTheme = {
  10: "#030401",
  20: "#171B08",
  30: "#232E0D",
  40: "#2C3B0D",
  50: "#34480C",
  60: "#3E560A",
  70: "#476506",
  80: "#507301",
  90: "#628024",
  100: "#738E3D",
  110: "#849B54",
  120: "#95A96B",
  130: "#A6B682",
  140: "#B8C49A",
  150: "#C9D2B2",
  160: "#DAE0CA",
};

const lightTheme = {
  ...createLightTheme(gxBlogTheme),
};

const darkTheme = {
  ...createDarkTheme(gxBlogTheme),
};

darkTheme.colorBrandForeground1 = gxBlogTheme[110];
darkTheme.colorBrandForeground2 = gxBlogTheme[120];

const App = () => {
  const [darkModeOn, setDarkModeOn] = useState(false);

  console.log("dark mode parent: ", darkModeOn);
  return (
    <FluentProvider
      theme={darkModeOn ? darkTheme : lightTheme}
      className='app-container'
    >
      {/* <FluentProvider theme={darkTheme}> */}
      <div className='page-width-container'>
        <Router>
          <Header darkModeOn={darkModeOn} setDarkModeOn={setDarkModeOn} />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/blog' element={<div>blog page</div>}></Route>
            <Route path='/about' element={<div>about page</div>}></Route>
            {/* <Route
          path='/deltaneutralvaults/:vaultType'
          element={<DeltaNeutralVaultsDetailsPage />}
        ></Route> */}

            {/* <Route path='/algovaults' element={<AlgoVaults />}></Route> */}
            <Route path='*' element={<Navigate to='/home' replace />}></Route>
            {/* <Route path='*' element={<Analytics />}></Route> */}
          </Routes>
        </Router>
      </div>
    </FluentProvider>
  );
};

export default App;
