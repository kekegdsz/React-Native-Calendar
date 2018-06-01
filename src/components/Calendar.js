import {
    ActivityIndicator,
    Dimensions,
    StyleSheet, Text,
    View
} from "react-native";
import {Component} from "react";
import React from "react";
import CalendarHeader from "./CalendarHeader";
import {mGetDate,} from "../utils/H";
import Day from "./Day";

const {width, height} = Dimensions.get('window')
const daySize = Math.min(width, height)
let _this = undefined;
export default class Calendar extends Component {

    constructor(props) {
        super(props);
        _this = this
        this.state = {
            weeks: [],
            isLoading: true,
        }

    }

    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate")
        return true;
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.loadingData(this)
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps" + nextProps)
        this.props = nextProps;
        this.loadingData(this)
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }


    loadingData = () => {
        let {current_year, current_month, current_day, selectDayItem, selectDays} = this.props
        console.log(current_year + "---" + current_month)
        let _this = this
        this.timer = setTimeout(function () {
            let days = mGetDate(current_year, current_month);
            //获取这个第一天星期几
            let week = new Date(current_year, current_month, 1).getDay()
            let weeks = []
            //如果前面有日期，增加占位符
            if (week > 0) {
                for (let i = 0; i < week; i++) {
                    weeks.push(
                        <Day key={i + "index"}/>
                    )
                }
            }
            for (let i = 1; i <= days; i++) {
                weeks.push(
                    <Day key={i} day={i} month={current_month} year={current_year}
                         selectDay={selectDays.get(i)} selectDayItem={selectDayItem}/>
                )
            }
            _this.setState({
                weeks: weeks,
                isLoading: false,
            })
            _this.timer && clearTimeout(_this.timer)
        }, 0);
    }

    render() {
        console.log("render")
        return (
            <View style={styles.container}>
                <CalendarHeader/>
                <View style={styles.weeksStyle}>
                    {this.state.isLoading ?
                        <View style={styles.container}>
                            <Text style={styles.loadingStyle}>加载中..</Text>
                        </View> : this.state.weeks}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    weekStyle: {
        width: daySize / 7,
        height: daySize / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    weeksStyle: {
        width: width,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    loadingStyle: {
        marginTop: daySize / 2,
        alignSelf: 'center',

    }
})

