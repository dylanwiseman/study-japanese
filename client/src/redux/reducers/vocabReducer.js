const initialState = {};

export default function vocabReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VOCAB": {
      return {
        ...action.value,
      };
    }
    default:
      return { ...state };
  }
}
