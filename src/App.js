/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {

    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Calendar from "./components/Calendar";
import {Utils} from "./utils/utils";


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        let map = new Map();
        map.set(1, 1)
        map.set(2, 2)
        map.set(3, 1)
        map.set(4, 1)
        map.set(5, 2)
        map.set(6, 3)
        map.set(7, 3)
        map.set(8, 1)
        map.set(9, 1)
        map.set(10, 2)
        map.set(11, 2)

        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            selectDays: map,
        }
    }

    nextLast = (isNext) => {
        let year = this.state.year
        let month = this.state.month
        console.log(year + "---" + month)
        if (isNext) {
            month++
            if (month > 11) {
                month = 0
                year++
            }
            console.log(year + "---+" + month)
        } else {
            month--
            if (month < 0) {
                month = 11
                year--
            }
            console.log(year + "---" + month)
        }

        this.setState({
            month: month,
            year: year,
        })
    }

    selectDayItem = (date) => {
        alert(date.toString())
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={this.nextLast.bind(this, false)}>
                        <View style={styles.nextViewStyle}><Text>上一个月</Text></View>
                    </TouchableOpacity>
                    <View style={styles.monthStyle}>
                        <Text style={styles.monthFontStyle}>{Utils.MONTHS[this.state.month]} {this.state.year} </Text>
                    </View>
                    <TouchableOpacity onPress={this.nextLast.bind(this, true)}>
                        <View style={styles.nextViewStyle}><Text>下一个月</Text></View>
                    </TouchableOpacity>
                </View>
                <Calendar
                    current_year={this.state.year}
                    current_month={this.state.month}
                    selectDay={(date) => {
                        alert(date)
                    }}
                    selectDays={this.state.selectDays}
                    selectDayItem={this.selectDayItem}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerStyle: {
        flexDirection: 'row',
        height: 50,
    },
    nextViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    monthStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthFontStyle: {
        fontSize: 22,
        fontWeight: '200',
        color: '#333248',
        fontFamily: 'System',
    }
});
