import {
    Dimensions,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import {Component} from "react";
import React from "react";
import {Utils} from "../utils/utils";

const {width, height} = Dimensions.get('window')
const daySize = Math.min(width, height)
export default class CalendarHeader extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        const weekHeaders = []
        for (let i in Utils.WEEKDAYS_CN) {
            //改变text属性一定要是小括号
            var header = (
                <View key={i} style={styles.headerStyle}><Text style={styles.headerTextStyle}>{Utils.WEEKDAYS_CN[i]}</Text></View>
            )
            weekHeaders.push(header);
        }

        return (
            <View style={styles.container}>
                {weekHeaders}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        marginTop: 10,
    },
    headerStyle: {
        width: daySize / 7,
        alignItems: 'center',
    },
    headerTextStyle:{
        fontSize:13,
        color:"#7a92a5",
        fontFamily: 'System',
    }
})
