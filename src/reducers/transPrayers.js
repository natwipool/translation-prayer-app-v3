// transPrayers Reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANS_PRAYER':
      return [...state, ...action.transPrayers]
    default:
      return state;
  }
};