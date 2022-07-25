import React from "react";
import { LogBox, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppNavigator from "./src/router";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import color from "./src/utils/color";

LogBox.ignoreAllLogs();

const theme = {
    ...DefaultTheme,
};

const App = (props) => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
          <StatusBar
              animated={true}
              backgroundColor={color.primary}
          />
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
