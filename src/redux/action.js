export const setUser = name => {
  return {
    type: 'SET_USER',
    payload: name,
  };
};

export const setPhone = phone => {
  return {
    type: 'SET_PHONE',
    payload: phone,
  };
};

export const setEmail = email => {
  return {
    type: 'SET_EMAIL',
    payload: email,
  };
};

export const setPhoto = photo => {
  return {
    type: 'SET_PHOTO',
    payload: photo,
  };
};
