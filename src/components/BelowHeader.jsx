import { useEffect, useState } from "react";

const BlinkingDot = () => {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{
        backgroundColor: "rgb(239, 68, 68)", // red-500
        animation: "pulseRed 3s infinite ease-in-out",
      }}
    ></span>
  );
};

const BelowHeader = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const istTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Use 12-hour format with AM/PM
      });

      // Convert AM/PM to uppercase
      const timeWithUppercaseAMPM = istTime.replace(/(am|pm)/i, (match) =>
        match.toUpperCase()
      );

      setTime(timeWithUppercaseAMPM);
    };

    updateTime(); // Call immediately to set the time
    const interval = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center px-4 py-2">
      <div className="flex justify-between items-center w-full max-w-3xl">
        {/* Left Section: Blinking Dot + Resume */}
        <div className="flex items-center gap-2">
          <BlinkingDot />
          <a
            href="https://drive.google.com/file/d/1bAjFQzGkNOpvZ0iVl_wCpiO50Fcy_Kkv/view?usp=sharing" //Resume link
            className="font-semibold underline"
            style={{ textDecorationColor: "rgb(239, 68, 68)" }} // Bright red color
          >
            Resume
          </a>
        </div>

        {/* Right Section: Time + Place */}
        <div className="flex gap-4">
          <div>{time}</div>
          <div>Noida, IN</div>
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;
  
