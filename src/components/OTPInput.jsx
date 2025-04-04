
import React, { useState, useRef } from "react";
const OTPInput = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    // Handle input change
    const handleChange = (index, event) => {
        const value = event.target.value;
        if (!/^\d?$/.test(value)) return; // Allow only digits

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if a digit is entered
        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        // Call onComplete if all fields are filled
        if (newOtp.every((num) => num !== "")) {
            onComplete(newOtp.join(""));
        }
    };

    // Handle Backspace Key
    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div style={{ display: "flex", gap: "8px" }}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
            ))}
        </div>
    );
};

export default OTPInput