const cart = {
  items: [],
  totalQuantity: 0
};

const handleCart = (state = cart, action) => {
  const product = action.payload;
  let updatedState;

  switch (action.type) {
    case "ADDITEM": {
      const exist = state.items.find((x) => x.id === product.id);
      if (exist) {
        updatedState = {
          ...state,
          items: state.items.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
          totalQuantity: state.totalQuantity + 1
        };
      } else {
        updatedState = {
          ...state,
          items: [...state.items, { ...product, qty: 1 }],
          totalQuantity: state.totalQuantity + 1
        };
      }
      break;
    }
    case "DELITEM": {
      const exist2 = state.items.find((x) => x.id === product.id);
      if (exist2.qty === 1) {
        updatedState = {
          ...state,
          items: state.items.filter((x) => x.id !== exist2.id),
          totalQuantity: state.totalQuantity - 1
        };
      } else {
        updatedState = {
          ...state,
          items: state.items.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          ),
          totalQuantity: state.totalQuantity - 1
        };
      }
      break;
    }
    default:
      updatedState = state;
      break;
  }

  return updatedState;
};

export default handleCart;
