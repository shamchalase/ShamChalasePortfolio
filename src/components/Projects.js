// src/components/Projects.js
import React from 'react';

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Movies Ticket Booking App</strong> (Apr. 2024) - MERN stack app for online movie bookings.
        <p>React, Node.js, Express.js, MongoDB, Stripe integration.</p>
        <img 
          src="https://user-images.githubusercontent.com/63189207/101284608-361d6f00-37e1-11eb-9c97-6a5bf5caefe3.PNG" 
          alt="Movies Ticket Booking App" 
          style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} 
        />
      </li>

      <li>
        <strong>Snappy Chat Application</strong> (Jan 2024) - Chat app with emojis, stickers, and data encryption.
        <p>React, Express.js, Node.js, MongoDB.</p>
        <img 
          src="https://siddharthgusain.github.io/portfolio/img/chats_snap.png" 
          alt="Snappy Chat Application" 
          style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} 
        />
      </li>

      <li>
        <strong>Cricket Scoreboard</strong> (Aug. 2022) - Java-based app with MySQL for live score tracking.
        <p>Java, MySQL integration, real-time updates, multi-user accessibility.</p>
        <img 
          src="https://cdn1.vectorstock.com/i/1000x1000/56/45/cricket-scoreboard-background-vector-20455645.jpg" 
          alt="Cricket Scoreboard" 
          style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} 
        />
      </li>

      <li>
        <strong>Voice Assistance & GUI</strong> (Mar. 2021) - Python voice assistant and GUI app.
        <p>Python-based voice commands and GUI development.</p>
        <img 
          src="https://skyje.com/wp-content/uploads/2020/03/designing-a-vui-93e1e3efe4e9489fdfeed319cbb38f4c.png" 
          alt="Voice Assistance & GUI" 
          style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} 
        />
      </li>
    </ul>
  </section>
);

export default Projects;
