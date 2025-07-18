# OTPInput Component

This is a simple and customizable OTP (One-Time Password) input component built with React. It allows users to enter a sequence of digits, commonly used for verification purposes.

## Features


- **Customizable Length:** You can easily specify the number of OTP digits the input should accept using the `length` prop. It defaults to 6.
- **Digit Input Only:** The component restricts input to only numeric characters.
- **Automatic Focus:** When a digit is entered in an input field, the focus automatically shifts to the next empty field.
- **Backspace Navigation:** Pressing Backspace in an empty field will move the focus to the previous field.
- **Completion Callback:** The `onComplete` prop allows you to define a function that will be called when all the input fields are filled. The complete OTP string is passed as an argument to this function.
- **Basic Styling:** The component includes basic inline styling for the input fields, which can be easily overridden or customized using CSS.

## Installation

To use this component in your React project, you can directly copy the code into a `.js` or `.jsx` file (e.g., `OTPInput.js`).

## Usage

```jsx
import React from 'react';
import OTPInput from './OTPInput'; // Assuming OTPInput.js is in the same directory

const MyComponent = () => {
  const handleOTPComplete = (otp) => {
    console.log('OTP entered:', otp);
    // You can now send this OTP to your backend for verification
  };

  return (
    <div>
      <h2>Verify your account</h2>
      <p>Please enter the 6-digit code sent to your email address.</p>
      <OTPInput length={6} onComplete={handleOTPComplete} />
    </div>
  );
};

export default MyComponent;
Props
Prop	Type	Default	Description
length	number	6	The number of OTP digits to accept.
onComplete	function	null	A callback function that is called when all input fields are filled. Receives the complete OTP string as an argument.

Export to Sheets
Customization
You can customize the appearance of the OTP input fields by modifying the style prop applied to each input element within the component. You can also choose to apply CSS classes for more extensive styling.

JavaScript

<OTPInput
  length={4}
  onComplete={(otp) => console.log('4-digit OTP:', otp)}
  style={{
    width: "50px",
    height: "50px",
    textAlign: "center",
    fontSize: "24px",
    border: "2px solid blue",
    borderRadius: "10px",
  }}
/>
For more complex styling, you can remove the inline styles and add a className prop to the main div or individual input elements and then define your styles in a separate CSS file.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull 1  request
