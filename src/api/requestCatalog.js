const requestCatalog = async (obj) => {
  if (obj.categoryId === '') {
    // eslint-disable-next-line no-param-reassign
    delete obj.categoryId;
  }
  const params = obj.categoryId || obj.q || obj.offset ? `?${new URLSearchParams(obj)}` : '';

  const response = await fetch(
    `${process.env.REACT_APP_BOSANOGA_URL}items${params}`,
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export default requestCatalog;
