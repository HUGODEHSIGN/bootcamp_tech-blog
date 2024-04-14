"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    format_date: (date) => {
        const dateObj = new Date(date);
        const formatter = new Intl.DateTimeFormat("en-US");
        return formatter.format(dateObj);
    },
};
