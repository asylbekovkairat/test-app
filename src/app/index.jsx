import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "../pages";



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <Routing />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
