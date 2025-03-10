import { useState, useEffect } from "react";
import { my_project_backend } from "./agent"; // Impor backend agent

const App = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      const result = await my_project_backend.getResume("Alice");

      if (result) {
        setResume(result); // Result adalah string
      } else {
        setResume("Resume tidak ditemukan");
      }
    };

    fetchResume();
  }, []);

  return (
    <div>
      <h1>Resume Data</h1>
      {resume ? (
        <div>
          <p>{resume}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
