const requestTopSales = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export default requestTopSales;
