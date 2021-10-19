const initialState = { i: 0 };

export default function vocabReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VOCAB": {
      return {
        state,
        ...action.value,
      };
    }
    default:
      return { ...state };
  }
}
