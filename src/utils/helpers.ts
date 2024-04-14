export default {
  format_date: (date: string) => {
    const dateObj = new Date(date);
    const formatter = new Intl.DateTimeFormat("en-US");
    return formatter.format(dateObj);
  },
};
