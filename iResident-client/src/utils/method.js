import AsyncStorage from '@react-native-async-storage/async-storage';

import { CommonActions } from '@react-navigation/native';
import moment from 'moment'
import Routes from '../router/routes';

const Method = {
  savePref: (key, value) => {
    AsyncStorage.setItem(key, JSON.stringify(value), (err) => { });
  },
  saveStringPref: (key, value) => {
    AsyncStorage.setItem(key, value, (err) => { });
  },

  removePref: (key) => {
    AsyncStorage.removeItem(key);
  },



  startWithReset: (navigation, screenName) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: screenName }],
      }),
    );
  },

  logOut: async (navigation) => {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: Routes.Splash }],
      }),
    );
    navigation.navigate(Routes.Splash);
  },

  getPref: (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  getStringPref: (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  },
  formatNotificationTime: (time) => moment(time).format('MMMM DD, YYYY | hh:mm a'),
  formatDDMMYYY: (time) => moment(time).format('DD/MM/YYYY'),
  formatMMDDYYY: (time) => moment(time).format('MM/DD/YYYY'),
  formatHHmmA: (time) => moment(time).format('HH:mm A'),
  removeNonNumber: (string = "") => string.replace(/[^\d]/g, "")
};

export default Method;
