import React, { FC } from 'react';
import { BackeHeader, BodyText, Layout } from '../../components';
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles.openFile';
import { Copy, Delete, ScanHistory, Share } from '../../assets/svg';
import { COLORS, hp } from '../../assets/stylesGuide';
import moment from 'moment';

const OpenFileScreen: FC = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)

    return (
        <Layout fixed={true} >

            <BackeHeader title={lang['_63']} />

            <View
                style={styles.main}
            >
                <View style={styles.row}>
                    <ScanHistory width={hp(5)} height={hp(5)} />

                    <View style={styles.context}>
                        <BodyText style={styles.dataTxt}>{lang['_68']}</BodyText>
                        <BodyText style={styles.date}>{moment().format('DD MMM YYYY, HH:MM A')}</BodyText>
                    </View>
                </View>

                <View style={styles.line}></View>

                <BodyText >https://www.youtube.com/watch?v=Zd9g7sKvgIM</BodyText>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                >
                    <BodyText style={styles.btnTxt}>{lang['_64']}</BodyText>
                </TouchableOpacity>

            </View>

            {/* BUTTONS */}

            <View style={styles.btnContainer}>

                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.twinBtn}
                    >
                        <Share fill={COLORS.SECONDARY} width={hp(2.2)} height={hp(2.2)} />
                    </TouchableOpacity>
                    <BodyText style={styles.twinBtnTxt}>{lang["_65"]}</BodyText>
                </View>

                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.twinBtn}
                    >
                        <Copy fill={COLORS.SECONDARY} width={hp(2.2)} height={hp(2.2)} />
                    </TouchableOpacity>
                    <BodyText style={styles.twinBtnTxt}>{lang["_66"]}</BodyText>
                </View>


            </View>

        </Layout >

    )
}

export default OpenFileScreen

