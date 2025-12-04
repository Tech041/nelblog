export const formatDate = (input: string) => {
  const isoString = input;
  const date = new Date(isoString);

  // Extract parts
  const day = date.getDate(); 
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()]; 
  const year = date.getFullYear(); 

  return `${day} ${month}, ${year}`; 
};
