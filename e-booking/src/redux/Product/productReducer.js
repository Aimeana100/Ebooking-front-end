import { PRODUCT_ACTIONS } from './productActionTypes';

const productReducer = (
  state = { users: {}, selectedUser: {} },
  { type, payload }
) => {
  switch (type) {
    case PRODUCT_ACTIONS.SELECT:
      return { ...state, selectedUser: payload };
    case PRODUCT_ACTIONS.UPDATE:
      console.log('HAPAPAPAPA');
      return { ...state, users: [...payload.payloadLocal] };
    case PRODUCT_ACTIONS.DELETE:
      console.log('before delete reducer', payload);
      return { ...state, users: [...payload.payloadLocal] };
    case PRODUCT_ACTIONS.GET_ALL:
      return { ...state, users: payload };
    default:
      return { ...state, selectedUser: {}, users: [] };
  }
};
export default productReducer;
