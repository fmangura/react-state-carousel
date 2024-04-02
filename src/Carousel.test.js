import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("renders properly", function() {
   render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
})

it("matches snapshot", function() {
  const { asFragment } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the left arrow", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // Start from the second image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  // Checks that you are in the 2nd photo
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // Click on left arrow
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  // Checks that you are back in the 1st photo
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

});

it("has no left arrow on first image", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // Checks to see if in 1st image
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  
  // Checks for the leftArrow
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();
});

it("has no right arrow on last image", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  
  // Move to the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // Checks if in the last image
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();

  // Checks to see if rightArrow exists
  expect(rightArrow).not.toBeInTheDocument();
});