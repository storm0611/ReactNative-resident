import Toast from 'react-native-simple-toast';

export const showToast = (msg) => {
    Toast.show(msg, Toast.SHORT, [
        'UIAlertController',
    ])
};