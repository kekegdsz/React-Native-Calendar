import {
    Dimensions,
    StyleSheet, Text,
    View,
    Platform, TouchableOpacity
} from "react-native";
import {Component} from "react";
import React from "react";
import {calendar} from "../utils/Lunar";

const {width, height} = Dimensions.get('window')
const daySize = Math.min(width, height)

const CN_DAY = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
const CN_MONTH = ['', '正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '腊月']
const CN_DAYS = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五',
    '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九',
    '三十', '三一']
export default class Calendar extends Component<Props> {


    renderState = (item) => {
        switch (item) {
            case 1:
                return '正常'
                break
            case 2:
                return '迟到'
                break
            case 3:
                return '早退'
                break
            case 4:
                return '旷工'
                break
            case 5:
                return '请假'
                break
            case 6:
                return '出差'
                break
            default:
                return '异常'
        }
    }


    renderDayStyle(item) {
        switch (item) {
            case 1:
                return styles.dayLunarFontStyle
                break
            default:
                return styles.dayStateFontStyle

        }
    }

    render() {
        const {day, month, year, selectDay, selectDayItem} = this.props;
        let lunar = ''
        if (day) {
            lunar = calendar.solar2lunar(parseInt(year), parseInt(month + 1), parseInt(day));
        }
        let dayString = ''
        if (lunar.day <= 10) {
            if (lunar.day == 1) {
                dayString = CN_MONTH[parseInt(lunar.month)];
            } else {
                dayString = "初" + CN_DAY[parseInt(lunar.day)];
            }
        } else {
            dayString = CN_DAYS[parseInt(lunar.day)];
        }

        return (
            <TouchableOpacity onPress={() => {
                if (selectDayItem) {
                    selectDayItem(new Date(year, month, day))
                }
            }}>
                <View style={styles.weekStyle}>
                    <Text style={styles.dayFontStyle}>{day}</Text>
                    <Text style={styles.dayLunarFontStyle}>{dayString}</Text>
                    <Text style={this.renderDayStyle(selectDay)}>{day && this.renderState(selectDay)}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    weekStyle: {
        width: daySize / 7,
        height: daySize / 7 + 10,
        alignItems: 'center',
    },
    dayFontStyle: {
        fontSize: 16,
        marginTop: Platform.OS === 'android' ? 4 : 6,
        fontFamily: 'System',
        fontWeight: '300',
        color: "#2d4150",
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    dayLunarFontStyle: {
        fontSize: 13,
        color: "#7a92a5",
        fontFamily: 'System',
    },
    dayStateFontStyle: {
        fontSize: 13,
        color: "#ff0000",
        fontFamily: 'System',
    }
})
