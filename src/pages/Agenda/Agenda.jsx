import React from 'react';
import './Agenda.css';

const agendaItems = [
  { time: '1:10 PM – 2:10 PM', event: 'Lunch' },
  { time: '2:10 PM – 2:15 PM', event: 'Opening and Welcome Announcement' },
  { time: '2:15 PM – 2:25 PM', event: 'Principal’s Address' },
  { time: '2:25 PM – 2:30 PM', event: 'AV 1 (Audio Visual Presentation)' },
  { time: '2:30 PM – 2:35 PM', event: 'Student speeches' },
  { time: '2:35 PM – 3:05 PM', event: 'Games / Interactive Activity' },
  { time: '3:05 PM – 3:25 PM', event: 'Transition Outside / School Tour' },
  { time: '3:25 PM – 3:30 PM', event: 'Welcome Dance' },
  { time: '3:30 PM – 3:40 PM', event: 'VC Address' },
  { time: '3:40 PM – 4:00 PM', event: 'Gift Distribution to 10th Grade Students by mam' },
  { time: '4:00 PM – 4:10 PM', event: 'Cake Cutting Ceremony' },
  { time: '4:10 PM – 4:15 PM', event: 'Singing Performance' },
  { time: '4:15 PM – 4:20 PM', event: 'Head Boy Speech' },
  { time: '4:20 PM – 4:25 PM', event: 'Head Girl Speech' },
  { time: '4:25 PM – 4:35 PM', event: 'Class 9C Dance' },
  { time: '4:35 PM – 4:45 PM', event: 'Class 9B Performance' },
  { time: '4:45 PM – 4:55 PM', event: 'Stand-up Comedy' },
  { time: '4:55 PM – 5:10 PM', event: 'Class 9A Performance' },
  { time: '5:10 PM – 5:20 PM', event: 'Kishore Sir Speech and Closing Remarks' },
];


function Agenda() {
  return (
    <div className="agenda-cinema-bg">
      <div className="agenda-cinema-overlay">
        <div className="agenda-cinema-header">
          <div className="agenda-cinema-title-wrap">
            <span className="agenda-cinema-icon-left">🎬</span>
            <h1 className="agenda-cinema-title">Farewell Day Program</h1>
            <span className="agenda-cinema-icon-right">🎥</span>
          </div>
          <div className="agenda-cinema-subtitle">A Cinematic Celebration of Memories & Friendship</div>
          <div className="agenda-cinema-divider"></div>
        </div>
        <ul className="agenda-cinema-list">
          {agendaItems.map((item, idx) => (
            <li key={idx} className="agenda-cinema-item">
              <span className="agenda-cinema-time">{item.time}</span>
              <span className="agenda-cinema-dot">•</span>
              <span className="agenda-cinema-event">{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Agenda;
