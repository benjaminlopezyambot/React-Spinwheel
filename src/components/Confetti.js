import React, { useState } from "react";

const Celebration = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  const handleStartCelebration = () => {
    setIsCelebrating(true);

    // Stop the celebration after 3 seconds
    setTimeout(() => {
      setIsCelebrating(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {/* The confetti animation */}
      <div
        className={`${
          isCelebrating ? "animate-confetti" : "hidden"
        } absolute left-0 top-0 w-full h-full pointer-events-none`}
      >
        {/* Your confetti SVG goes here */}
      </div>

      {/* The button to trigger the celebration */}
      <button
        className="py-2 px-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        onClick={handleStartCelebration}
      >
        Celebrate!
      </button>
    </div>
  );
};

export default Celebration;
