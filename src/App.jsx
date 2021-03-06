import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SceneLoader from "./components/sceneLoader/SceneLoader";
import Header from "./components/header/Header";
import ModalRoot from "./components/modalRoot/ModalRoot";
import OfflineNotice from "./components/offlineNotice/OfflineNotice";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CodeSplittingService from "./services/CodeSplittingService.js";

export default function App({ store, persistor, history }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<SceneLoader />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Header />
            <main className="app__main">
              <Switch>
                <Redirect exact from="/" to="/dashboard" />
                <ProtectedRoute
                  path="/dashboard"
                  component={CodeSplittingService.scene("dashboard/Dashboard")}
                />
                <ProtectedRoute
                  path="/settings"
                  component={CodeSplittingService.scene("settings/Settings")}
                />
                <Route
                  path="/auth"
                  component={CodeSplittingService.scene("auth/Auth")}
                />
                <Route component={CodeSplittingService.scene("error/Error")} />
              </Switch>
            </main>
            <ModalRoot />
            <OfflineNotice />
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}
