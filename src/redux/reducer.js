const INITIAL_STATE = {
  user: 'Elovset',
  phone: '055-555-55-55',
  email: 'Elovset@box.az',
  photo: 'http://assets.stickpng.com/thumbs/585e4bd7cb11b227491c3397.png',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    case 'SET_PHONE':
      return {...state, phone: action.payload};
    case 'SET_EMAIL':
      return {...state, email: action.payload};
    case 'SET_PHOTO':
      return {...state, photo: action.payload};

    default:
      return state;
  }
};
