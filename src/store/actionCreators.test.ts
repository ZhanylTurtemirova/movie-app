import * as actions from "./services";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("actions", () => {
  it("returns data when fetching movies has been called", (done) => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet("http://localhost:4000/movies").reply(200, data);

    actions.getMovies().then((response: any) => {
      expect(response.data).toEqual(data);
      done();
    });
  });
});
