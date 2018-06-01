export const Utils = {
    WEEKDAYS_CN: ['日', '一', '二', '三', '四', '五', '六'],
    MONTHS: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ],
    MAX_ROWS: 7,
    MAX_COLUMNS: 7,
    getDaysInMonth: function (month, year) {
        const lastDayOfMonth = new Date(year, month + 1, 0);
        return lastDayOfMonth.getDate();
    },
};

