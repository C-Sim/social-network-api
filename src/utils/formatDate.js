const { format } = require("date-fns");

const formatDate = (date) => {
  const formattedDate = new Date(date);
  return format(formattedDate, "EEEE MMMM do, yyyy @ hh:mm:ss aaaa");
};

module.exports = formatDate;
