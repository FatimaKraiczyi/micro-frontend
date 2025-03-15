import React from "react";

const MFE2 = React.lazy(() => import("segundoMFE/App"));
const MFE1 = React.lazy(() => import("primeiroMFE/App"));

const App: React.FC = () => {
  return (
    <div>
      <h1>HOST</h1>
      <React.Suspense>
        <MFE1 />
      </React.Suspense>
      <React.Suspense>
        <MFE2 />
      </React.Suspense>
    </div>
  );
};

export default App;
