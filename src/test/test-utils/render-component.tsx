import { ReactElement, ReactNode } from "react";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { BrowserHistory, createBrowserHistory } from "history";

const withReduxProvider = (component: ReactNode, store: Store) => (
  <Provider store={store}>{component}</Provider>
);

export const withRouterAndReduxProvider = (
  component: ReactElement,
  store: Store,
  history?: BrowserHistory
) => {
  const browserHistory = history ? history : createBrowserHistory();

  return render(
    withReduxProvider(
      <Router location={browserHistory.location} navigator={browserHistory}>
        {component}
      </Router>,
      store
    )
  );
};
