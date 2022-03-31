import React, { useState } from 'react'
import { View, Text, StyleSheet, Vibration  } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';
import { Countdown } from '../components/CountDown.Js'
import { RoundedButton } from '../components/RoundedButton'
import { colors } from '../utils/colors'
import { spacing } from '../utils/sizes'
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,

  ];

export const Timer = ({focusSubject, clearSubjectt}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();


    }
    return(
    <View style={styles.container}>
        <View style={styles.countdown}>
            <Countdown 
            minutes={minutes}
            isPaused={!isStarted} 
            onProgress={setProgress} 
            onEnd={onEnd} />
            <View style={{padding: spacing.xxl}} >
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
        <View style={{paddingTop: spacing.sm}}>
            <ProgressBar
                progress={progress}
                color={colors.progressBar}
                style={{height: spacing.sm}}
            />
        </View>
        <View style={styles.timingWrapper}> 
            <Timing onChangeTime={setMinutes} />
        </View>
        <View style={styles.buttonWrapper}>
            {!isStarted && (
                <RoundedButton title="start" onPress={() => setIsStarted(true)} />
            )}
            {isStarted && (
                <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
            )}
        </View>
        <View style={styles.clearSubjectWrapper}> 
            <RoundedButton size={50} title="_" onPress={clearSubjectt} />
        </View>
    </View>
    )}

    const styles = StyleSheet.create({
        container:{
            flex: 1,
        },

        countdown:{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
        },

        buttonWrapper: {
            flex: 0.3,
            flexDirection: 'row',
            padding: spacing.md,
            justifyContent: 'center',
            alignItems: 'center'
        },
        timingWrapper:{
            flex: 0.1,
            justifyContent: 'center',
            paddingTop: spacing.xxl,
            flexDirection: 'row'
        },
        title:{
            color: colors.white,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        clearSubjectWrapper:{
            flexDirection: 'row',
            justifyContent: 'center'
        },
        task:{
            color: colors.white,
            textAlign: 'center'
        }
    })