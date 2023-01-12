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
import dataProviderRest from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { supabaseClient } from "utility";
import { PostList, PostShow } from "pages/posts";
import { ColorModeContextProvider } from "contexts";
import authProvider from "./authProvider";

import axios, {
  AxiosRequestConfig,
  AxiosPromise,
} from "@pankod/refine-simple-rest/node_modules/axios/index";
const axiosInstance = axios.create();

const API_URL = "https://jxyvwtrmfrkwfcisuibl.functions.supabase.co";

axiosInstance.interceptors.request.use(
  // Here we can perform any function we'd like on the request
  (request: AxiosRequestConfig) => {
    // Retrieve the token from local storage
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eXZ3dHJtZnJrd2ZjaXN1aWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NjYxMjAsImV4cCI6MTk4NDU0MjEyMH0.uN-7nsvPf0R7xGidKslA1aj-nkXn3PjoY0zZGoq-NeU";
    // Check if the header property exists

    request.headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(request.headers);
    return request;
  }
);

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={{
            default: dataProvider(supabaseClient),
            edgeProvider: dataProviderRest(API_URL, axiosInstance),
          }}
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
            {
              name: "CRUISEHER",
              options: {
                dataProviderName: "edgeProvider",
              },
            },
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
