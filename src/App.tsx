import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import routerProvider from "@pankod/refine-react-router-v6";
import { supabaseClient } from "utility";
import { PostList } from "pages/posts";
import { ColorModeContextProvider } from "contexts";
import authProvider from "./authProvider";

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          options={{ liveMode: "auto" }}
          authProvider={authProvider}
          routerProvider={{
            ...routerProvider,
            routes: [
              {
                path: "/register",
                element: <AuthPage type="register" />,
              },
              {
                path: "/forgot-password",
                element: <AuthPage type="forgotPassword" />,
              },
              {
                path: "/update-password",
                element: <AuthPage type="updatePassword" />,
              },
            ],
          }}
          LoginPage={() => (
            <AuthPage
              type="login"
              providers={[
                {
                  name: "google",
                  label: "Sign in with Google",
                },
              ]}
              formProps={{
                defaultValues: {
                  email: "",
                  password: "",
                },
              }}
            />
          )}
          notificationProvider={notificationProvider}
          resources={[
            { name: "arrivals", list: PostList },
            { name: "departures", list: PostList },
          ]}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
