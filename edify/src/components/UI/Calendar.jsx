import React, { useState } from "react";
import vector4 from '../../assets/vector-4.png'

const calendarData = {
  "9": { type: "assignment", label: "1 Assignment" },
  "18": { type: "quiz", label: "1 Quiz" },
};

const Calendar = () => {
  const [hoveredDay, setHoveredDay] = useState(null);

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const getDayColor = (day) => {
    if (day === 9) return "bg-[#FE7474] text-black";
    if (day === 18) return "bg-[#FAD35C] text-black";
    return "text-gray-800";
  };

  return (
    <div className="font-manrope w-full max-w-lg mx-auto md:px-4 px-6 pt-4 rounded-lg ">
      <h2 className="text-center text-lg font-medium mb-4">November</h2>
      <div className="grid grid-cols-7 text-center md:gap-x-8 gap-x-4 gap-y-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-gray-400 font-medium">
            {day}
          </div>
        ))}

        {/* Empty days for the first week */}
        {Array.from({ length: 1 }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`relative p-2  rounded-full cursor-pointer hover:bg-gray-200 ${getDayColor(
              day
            )}`}
            onMouseEnter={() => setHoveredDay(day)}
            onMouseLeave={() => setHoveredDay(null)}
          >
            {day}

            {/* Tooltip */}
            {hoveredDay === day && calendarData[day] && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 bg-purple-100 text-black p-2 rounded-lg shadow-md text-sm z-50">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      calendarData[day].type === "assignment"
                        ? "bg-[#FE7474]"
                        : "bg-blue-700"
                    }`}
                  ></span>
                  {calendarData[day].label}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
