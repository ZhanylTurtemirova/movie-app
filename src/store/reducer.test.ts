import { SET_MOVIES_ERROR } from "./actionTypes";
import reducer from "./reducer";
import { initialState } from "./reducer";

describe("reducer", () => {
  test("should record movie data to the store", () => {
    const dataInStore = {
      ...initialState,
      error: "ERROR",
    };

    const expectedState = reducer(initialState, {
      type: SET_MOVIES_ERROR,
      payload: "ERROR",
    });

    expect(expectedState).toEqual(dataInStore);
  });
});
