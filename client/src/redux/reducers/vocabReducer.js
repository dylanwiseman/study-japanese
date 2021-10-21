const initialState = {};

export default function vocabReducer(state = initialState, action) {
  console.log("action.value: ", action.value);
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
