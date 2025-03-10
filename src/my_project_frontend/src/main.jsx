import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as backendIdl } from "../declarations/my_project_backend/my_project_backend.did.js";




const agent = new HttpAgent({ host: "http://localhost:8000" });
const canisterId = "be2us-64aaa-aaaaa-qaabq-cai";  // ID canister frontend
const actor = Actor.createActor(backendIdl, {
  agent,
  canisterId,
});

// Fungsi untuk mengambil data
const fetchData = async () => {
  try {
    const result = await actor.getResume("Alice");
    console.log(result);
  } catch (error) {
    console.error("Error fetching resume:", error);
  }
};

useEffect(() => {
  fetchData();
}, []);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
