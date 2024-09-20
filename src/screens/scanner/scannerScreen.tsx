import React, { useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { COLORS, hp } from '../../assets/stylesGuide';
import { CameraRotate, Flash, Gallery, ScannerFrame } from '../../assets/svg';
import { Layout } from '../../components';
import styles from './styles.scanner';
import RNQRGenerator from 'rn-qr-generator';
import Toast from 'react-native-toast-message'
import { ALERT_HEADER, ALERT_TYPES } from '../../assets/constants';

const ScannerScreen = () => {
  const cameraRef = useRef<RNCamera>(null)
  const [isFrontCamera, setisFrontCamera] = useState(false)
  const [isFlashOn, setisFlashOn] = useState(false)
  const [isScanning, setisScanning] = useState(false)

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
        .then(response => {
          const { values } = response; // Array of detected QR code values. Empty if nothing found.
          if (values?.length > 0) {
            console.log("values == >>", values);
          } else {
            handleNotDetected()
          }
        })
        .catch(error => {
          handleNotDetected()
        });
    })
      .catch(() => { })
  }

  const handleScan = (val: any) => {
    console.log("val == >>", val?.data);
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
