import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";


const testPhoto = TEST_IMAGES[1]

it("renders properly", function() {
    render(
     <Card
        caption={testPhoto.caption}
        src={testPhoto.src}
        currNum= '1'
        totalNum= '1'
     />
   );
 })
 
 it("matches snapshot", function() {
   const { asFragment, debug } = render(
     <Card
        caption={testPhoto.caption}
        src={testPhoto.src}
        currNum= '1'
        totalNum= '1'
     />
   );
   expect(asFragment()).toMatchSnapshot();
 })