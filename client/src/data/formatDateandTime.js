const formatDateAndTime = (date = Date.now()) => {
  const newDate = new Date(date);
  const formattedTime = newDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
  });
  const options = {
    day: "numeric",
    month: "short",  // Use "short" for abbreviated month (e.g., Jan, Feb)
    year: "numeric"  // Full year (e.g., 2024)
  };
  
  // Format the date with the options
  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(newDate);

  return {
      date: formattedDate,
      time: formattedTime
  };
};

export default formatDateAndTime;