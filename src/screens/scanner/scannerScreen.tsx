import React, { useRef, useState } from 'react';
import { TouchableOpacity, View, Vibration } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { COLORS, hp } from '../../assets/stylesGuide';
import { CameraRotate, Flash, Gallery, ScannerFrame } from '../../assets/svg';
import { Layout } from '../../components';
import styles from './styles.scanner';
import RNQRGenerator from 'rn-qr-generator';
import Toast from 'react-native-toast-message'
import { ALERT_HEADER, ALERT_TYPES, ASYNC_KEYS, QR_TYPE, SCREENS } from '../../assets/constants';
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig';
import useStorage from '../../hooks/useStorage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'

const ScannerScreen = () => {
  const vibrateEnabled = useAppConfigState(appConfigtStateSelectors.vibrateEnabled)
  const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();
  const { saveEntryInStorage } = useStorage()
  const cameraRef = useRef<RNCamera>(null)
  const [isFrontCamera, setisFrontCamera] = useState(false)
  const [isFlashOn, setisFlashOn] = useState(false)
  const isScanningRef = useRef(false)

  const CONTROLS = [
    {
      id: 1,
      icon: <Gallery width={20} height={20} />,
      onPress: () => handleScanFromImage()
    },
    {
      id: 1,
      icon: <Flash width={20} height={20} fill={isFlashOn ? COLORS.PRIMARY : COLORS.INACTIVE} />,
      onPress: () => setisFlashOn((prev) => !prev)
    },
    {
      id: 1,
      icon: <CameraRotate width={20} height={20} fill={isFrontCamera ? COLORS.PRIMARY : COLORS.INACTIVE} />,
      onPress: () => setisFrontCamera((prev) => !prev)
    },
  ]

  const handleScanFromImage = () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      RNQRGenerator.detect({
        uri: image.path
      })
        .then(async (response) => {
          if (vibrateEnabled) {
            Vibration.vibrate()
          }
          const { values } = response; // Array of detected QR code values. Empty if nothing found.
          if (values?.length > 0) {
            const mData = {
              type: QR_TYPE.SCANNED,
              data: values[0],
            }
            const res = await saveEntryInStorage(ASYNC_KEYS.SCANNED, mData)
            if (res) {
              navigation.navigate(SCREENS.OPEN_FILE, { data: res })
            }
          } else {
            handleNotDetected()
          }
        })
        .catch(error => {
          if (vibrateEnabled) {
            Vibration.vibrate()
          }
          handleNotDetected()
        });
    })
      .catch(() => { })
  }

  const handleScan = async (val: any) => {
    if (val?.data) {
      if (isScanningRef.current == false) {
        isScanningRef.current = true
        if (vibrateEnabled) {
          Vibration.vibrate()
        }
        const mData = {
          type: QR_TYPE.SCANNED,
          data: val?.data,
        }
        const res = await saveEntryInStorage(ASYNC_KEYS.SCANNED, mData)
        if (res) {
          navigation.navigate(SCREENS.OPEN_FILE, { data: res })
        }
        setTimeout(() => {
          isScanningRef.current = false
        }, 1500);
      }
    } else {
      handleNotDetected()
    }
  }

  const handleNotDetected = () => {
    Toast.show({
      type: ALERT_TYPES.DANGER,
      text1: ALERT_HEADER.DANGER,
      text2: "Cannot detect QR code in image",
    });
  }



  return (
    <Layout fixed={true}>

      <RNCamera
        ref={cameraRef}
        style={styles.cameraMain}
        type={isFrontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
        flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        onBarCodeRead={handleScan}
      >

        {/* CONTROLS */}
        <View style={styles.controlsContainer}>
          {
            CONTROLS.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                onPress={() => item.onPress()}
              >
                {item.icon}
              </TouchableOpacity>
            ))
          }
        </View>

        <View style={styles.scannerFrameContainer}>
          <ScannerFrame
            width={hp(28)}
            height={hp(28)}
          />
        </View>

      </RNCamera>

    </Layout>
  )
}

export default ScannerScreen
