import { Alert, Linking, PermissionsAndroid, Platform, Share } from "react-native"
import DeviceInfo from "react-native-device-info"
import moment from "moment";
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message'
import { ALERT_HEADER, ALERT_TYPES } from "../assets/constants";
import RNFS from 'react-native-fs';

const showToast = (
    text: string,
    type: ALERT_TYPES = ALERT_TYPES.INFO,
    header: ALERT_HEADER = ALERT_HEADER.INFO,
) => {
    Toast.show({
        type: type,
        text1: header,
        text2: text,
    });
}

/**
 * EMAIL VAILDATION
 * **/
const validateEmail = (text: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(text)) {
        return true
    } else {
        return false
    }
};

const onShare = async (data: string) => {
    try {
        const result = await Share.share({
            message: data,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
    }
};


const isIOS = () => {
    return Platform.OS == 'ios'
}

const hasNotch = () => {
    return DeviceInfo.hasNotch()
}

const formateDate = (_date: any) => {
    const date = moment(_date).format('DD')
    const month = moment(_date).format('MM')
    const year = moment(_date).format('YYYY')
    return `${year}-${month}-${date}`
}

const pasteFromClipboard = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const text = await Clipboard.getString();
            resolve(text)
        } catch (error) {
            resolve('')
        }
    })
};

const copyToClipboard = async (txt: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Clipboard.setString(txt || "");
            resolve(txt)
        } catch (error) {
            resolve('')
        }
    })
};

// DOWNLOAD GENERATE QR CODES TO GALLERY
const handleDownloadMedia = async (url: string,) => {
    if (Platform.OS === 'ios') {
        const downloadUrl = await downloadFile(url);
        return downloadUrl
    } else {
        try {
            const apiLevel = await DeviceInfo.getApiLevel()
            const PERM = apiLevel < 33 ?
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                :
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
            const granted = await PermissionsAndroid.request(
                PERM,
                {
                    title: 'Storage Permission Required',
                    message: 'Application needs access to your storage to download File',
                    buttonPositive: 'OK'
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // Start downloading
                const downloadUrl = await downloadFile(url);
                return downloadUrl
            } else {
                // If permission denied then show alert
                Alert.alert('Error', 'Storage Permission Not Granted', [
                    {
                        text: 'Allow in settings',
                        onPress: () => Linking.openSettings(),
                    },
                ]);

            }
        } catch (err) {
            // To handle permission related exception
            console.log("++++" + err);
        }
    }
};

const getFileExtention = (fileUrl: string) => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
        /[^.]+$/.exec(fileUrl) : undefined;
};

const downloadFile = async (fileUrl: string) => {
    return new Promise(async (resolve, reject) => {
        let FILE_URL = fileUrl;
        // Function to get extension of the file URL
        let file_ext: any = getFileExtention(FILE_URL);

        file_ext = '.' + file_ext[0];

        const fileName = Date.now();

        const AndroidPath = `${RNFS.PicturesDirectoryPath}/Everace/Everscanner`
        const IosPath = `${RNFS.LibraryDirectoryPath}/Images/${fileName}`;

        const destPath = Platform.OS === 'android'
            ? `${AndroidPath}/${fileName}${file_ext}`
            : IosPath

        try {
            if (Platform.OS != 'ios') {
                const exists = await RNFS.exists(AndroidPath);
                if (!exists) {
                    await RNFS.mkdir(AndroidPath);
                    // If it doesn't exist, create it
                    console.log('Directory created:', AndroidPath);
                }
            }
            await RNFS.copyFile(fileUrl, destPath);
            resolve(destPath);
        } catch (error) {
            console.error('Error saving file:', error);
            resolve(false)
        }

    });
};

const requestContactsPermission = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            if (Platform.OS == 'ios') {
                resolve(true)
            } else {
                const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
                    title: 'Contacts',
                    message: 'This app would like to access your contacts.',
                    buttonPositive: 'Please accept EverScanner',
                })
                const result1 = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                    title: 'Contacts',
                    message: 'This app would like to access your contacts.',
                    buttonPositive: 'Please accept EverScanner',
                })

                if (result == PermissionsAndroid.RESULTS.GRANTED && result1 == PermissionsAndroid.RESULTS.GRANTED) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        } catch (error) {
            console.log("requestContactsPermission ==>>", error);

            resolve(false)
        }

    })
}

const requestFineLocationPermission = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            if (Platform.OS == 'ios') {
                resolve(true)
            } else {
                const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                    title: 'Location permission is required for WiFi connections',
                    message: 'This app needs location permission as this is required  to scan for wifi networks.',
                    buttonPositive: 'Please accept EverScanner',
                })


                if (result == PermissionsAndroid.RESULTS.GRANTED) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        } catch (error) {
            console.log("requestFineLocationPermission ==>>", error);
            resolve(false)
        }

    })
}

const parseWiFiString = (wifiString: string) => {
    // Remove the "WIFI:" prefix if it exists
    const cleanedString = wifiString.replace(/^WIFI:/, '');

    // Split the string by semicolon and filter out empty entries
    const entries = cleanedString.split(';').filter(entry => entry);

    // Initialize an object to hold the parsed information
    const wifiInfo: any = {
        type: null,
        ssid: null,
        password: null,
        hidden: false
    };

    // Iterate through each entry to extract values
    entries.forEach(entry => {
        const [key, value] = entry.split(':');
        switch (key) {
            case 'T':
                wifiInfo.type = value;
                break;
            case 'S':
                wifiInfo.ssid = value;
                break;
            case 'P':
                wifiInfo.password = value;
                break;
            case 'H':
                wifiInfo.hidden = value === 'true';
                break;
            default:
                break;
        }
    });

    return wifiInfo;
};



export {
    showToast,
    onShare,
    isIOS,
    hasNotch,
    formateDate,
    pasteFromClipboard,
    copyToClipboard,
    validateEmail,
    handleDownloadMedia,
    requestContactsPermission,
    requestFineLocationPermission,
    parseWiFiString
}