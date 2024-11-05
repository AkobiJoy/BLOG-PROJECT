"use client"
import React from 'react'




import { useState, useEffect } from 'react';

const initialStudent = {
  name: " Obed",
  class: "Jss3",
  session: "prevYear/nextYear",
  gender: "male"
};

export default function Assignment() {
  const [student, setStudent] = useState(initialStudent);
  const [timestamp, setTimestamp] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false); // Track if the update has occurred

  useEffect(() => {
    // Set the target update date to November 4th, 2024
    const targetDate = new Date('2024-11-05T00:00:00'); // Update at midnight on Nov 4, 2024
    const now = new Date();

    // Calculate the delay in milliseconds until the target date
    const delay = targetDate - now;

    // Only set the timeout if the target date is in the future
    if (delay > 0) {
      const timer = setTimeout(() => {
        updateStudent();
      }, delay);

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  // Function to update the student object
  const updateStudent = () => {
    const updatedStudent = {
      ...student,
      class: "Ss1"
    };
    setStudent(updatedStudent);
    setTimestamp(new Date().toLocaleString()); // Set the update time
    setIsUpdated(true); // Mark as updated
  };

  // Function to manually trigger update for testing
  const handleManualUpdate = () => {
    updateStudent();
  };

  return (
    <div className='px-4 py-2 flex flex-col gap-1'>
      <h1>Name: {student.name}</h1>
      <h1>Class: {student.class}</h1>
      {/* Display "2023/2024" initially, then update to "2024/2025" */}
      <h1>Session: {student.class === "Ss1" ? "2024/2025" : "2023/2024"}</h1>
      <h1>Gender: {student.gender}</h1>
      {timestamp && <h2>Updated on: {timestamp}</h2>}
      
      {/* Button to manually trigger the update for testing */}
      <button
        className={`rounded-full py-3 px-4 w-max ${
          isUpdated ? 'bg-blue-600 outline-none text-white' : 'bg-sky-700 text-white'
        }`}
        onClick={handleManualUpdate}
      >
        {isUpdated ? 'Student Data Updated' : 'Update Student Data Now'}
      </button>

      {/* Show a message if the update has already occurred */}
      {isUpdated && <p>This student's data has been updated!</p>}
    </div>
  );
}




// const student={

//     name:"obed",
//     class:"jss3",
//     session:"prevYear/nextYear",
//     gender:"male"
// }

// export default function Assignemnt() {
//   return (
//     <div>
//       <h1>{student.name}</h1>
//       <h1>{student.class}</h1>
//       <h1>{student.session}</h1>
//       <h1>{student.gender}</h1>
//     </div>
//   )
// }




// import { useState, useEffect } from 'react';

// const initialStudent = {
//   name: "obed",
//   class: "jss3",
//   session: "prevYear/nextYear",
//   gender: "male"
// };

// export default function Assignment() {
//   const [student, setStudent] = useState(initialStudent);
//   const [timestamp, setTimestamp] = useState(null);

//   useEffect(() => {
//     // Set the target update date
//     const targetDate = new Date('2024-11-05T00:00:00'); // Update at midnight on Nov 5, 2024
//     const now = new Date();

//     // Calculate the delay in milliseconds until the target date
//     const delay = targetDate - now;

//     // Only set the timeout if the target date is in the future
//     if (delay > 0) {
//       const timer = setTimeout(() => {
//         // Update the student object, changing class and session display
//         const updatedStudent = {
//           ...student,
//           class: "ss1"
//         };
//         setStudent(updatedStudent);
//         setTimestamp(new Date().toLocaleString()); // Set the update time
//       }, delay);

//       // Cleanup timer if component unmounts
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Name: {student.name}</h1>
//       <h1>Class: {student.class}</h1>
//       {/* Display "2023/2024" initially, then update to "2024/2025" */}
//       <h1>Session: {student.class === "ss1" ? "2024/2025" : "2023/2024"}</h1>
//       <h1>Gender: {student.gender}</h1>
//       {timestamp && <h2>Updated on: {timestamp}</h2>}
//     </div>
//   );
// }

