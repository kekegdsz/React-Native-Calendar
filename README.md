## calendar


![image](./2018-06-01_12_52_27.gif)

## 运行

```bash
git clone git@github.com:kekegdsz/calendar.git

npm install

react-native run-android
```

## 使用
```bash
<Calendar
   current_year={this.state.year}
   current_month={this.state.month}
   selectDay={(date) => {
      alert(date)
   }}
   selectDays={this.state.selectDays}
   selectDayItem={this.selectDayItem}
/>
```
