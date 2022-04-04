import { render, screen } from "@testing-library/react";
import Masonry from "./Masonry";

test("Should render correct number of colume of picutures", async () => {
  const mockPicture = {
    _id: "5f115174961c75468fbe0f44",
    index: 0,
    name: "purple",
    src: "https://picsum.photos/240/379?random=371",
  };
  let picMatrix = [[mockPicture]];
  const { rerender } = render(<Masonry picMatrix={picMatrix} />);
  expect(await screen.findAllByTestId("col")).toHaveLength(1);

  picMatrix = [
    [mockPicture, mockPicture],
    [mockPicture, mockPicture],
    [mockPicture, mockPicture],
  ];
  rerender(<Masonry picMatrix={picMatrix} />);
  expect(await screen.findAllByTestId("col")).toHaveLength(3);

  picMatrix = [
    [mockPicture, mockPicture, mockPicture],
    [mockPicture, mockPicture, mockPicture],
    [mockPicture, mockPicture, mockPicture],
    [mockPicture, mockPicture, mockPicture],
    [mockPicture, mockPicture, mockPicture],
    [mockPicture, mockPicture, mockPicture],
  ];
  rerender(<Masonry picMatrix={picMatrix} />);
  expect(await screen.findAllByTestId("col")).toHaveLength(6);
});
