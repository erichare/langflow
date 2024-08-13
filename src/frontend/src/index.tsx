import ReactDOM from "react-dom/client";
import ContextWrapper from "./contexts";
import reportWebVitals from "./reportWebVitals";

// @ts-ignore
import "./style/index.css";
// @ts-ignore
import "./style/applies.css";
// @ts-ignore
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import LoadingComponent from "./components/loadingComponent";
import router from "./routes";
import "./style/classes.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ContextWrapper>
    <Suspense
      fallback={
        <div className="loading-page-panel">
          <LoadingComponent remSize={50} />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </ContextWrapper>,
);
reportWebVitals();
