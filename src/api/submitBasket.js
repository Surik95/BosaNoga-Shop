const submitBasket = async (body) => {
  const response = await fetch(`${process.env.REACT_APP_BOSANOGA_URL}order`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.status;
};

export default submitBasket;
