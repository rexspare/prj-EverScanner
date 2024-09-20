import { Platform, Share } from "react-native"
import DeviceInfo from "react-native-device-info"
import moment from "moment";
import Clipboard from '@react-native-clipboard/clipboard';

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


export {
    onShare,
    isIOS,
    hasNotch,
    formateDate,
    pasteFromClipboard,
    copyToClipboard,
    validateEmail,
}