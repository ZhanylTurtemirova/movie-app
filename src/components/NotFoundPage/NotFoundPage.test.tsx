import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NotFoundPage from "./NotFoundPage";
import { MemoryRouter } from "react-router-dom";
const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("NotFoundPage", () => {
  it("should render", () => {
    const { asFragment } = render(<NotFoundPage />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should find title", () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText("Page Not Found")).toBeInTheDocument();
  });
  it("should find and click Back button", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    const backBtn = getByTestId("backBtn");
    expect(backBtn).toBeInTheDocument();
    act(() => {
      fireEvent.click(backBtn);
    });
    await waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith("/");
    });
  });
});
