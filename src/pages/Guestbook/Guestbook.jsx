import React from "react";
import { motion } from "framer-motion";
import "./Guestbook.css";

import radhika from "../../assets/Teachers/radhika.jpg";
import gkishore from "../../assets/Teachers/g.kishore.jpg";
import kkishore from "../../assets/Teachers/k.kishore.jpg";
import padmapriya from "../../assets/Teachers/padmapriya.jpg";
import ramamani from "../../assets/Teachers/Ramamani.jpg";
import Bhaskar from "../../assets/Teachers/Bhaskar.jpg";
import Aarshad from "../../assets/Teachers/A.jpg";

export default function Guestbook() {

const teacherTestimonials = [
{
id: 1,
name: "Mrs. Ramamani K",
subject: "English Literature",
message: "Batch of 2026, I miss your lively discussions and creative writing sessions every day.",
photo: ramamani
},
{
id: 1,
name: "Mrs. Padmapriya P",
subject: "Hindi Literature",
message: "I miss your enthusiasm for Hindi literature and the way you brought stories to life in our classroom.",
photo: padmapriya
},
{
id: 1,
name: "Mrs. Radhika Y",
subject: "Telugu",
message: "I miss your enthusiasm for Telugu literature and the way you brought stories to life in our classroom.",
photo: radhika
},

{
id: 2,
name: "Mr. G. Kishore",
subject: "Mathematics",
message: "I miss seeing your bright faces in math class and hearing your 'aha!' moments when solving problems.",
photo: gkishore
},
{
id: 3,
name: "Mr. K. Kishore",
subject: "Chemistry / Physics",
message: "The lab just isn't the same without your excited questions and discoveries.",
photo: kkishore
},
{
id: 4,
name: "Mr. M. Aarshad",
subject: "Social Studies",
message: "I miss our debates about historical events and your thoughtful perspectives.",
photo: Aarshad
},
{
id: 5,
name: "Mrs. Baskar Singh",
subject: "Biology",
message: "My biology lab feels empty without your curious questions and discoveries.",
photo: Bhaskar
}
];

const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.15,
delayChildren: 0.2
}
}
};

const itemVariants = {
hidden: { opacity: 0, y: 25 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.6,
ease: "easeOut"
}
}
};

return (
<motion.div
className="guestbook-page"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
>

```
  <div className="guestbook-header">
    <h1 className="section-title">Teacher's Messages</h1>
    <p className="section-subtitle">
      Words of wisdom and love from our mentors
    </p>
  </div>

  <motion.div
    className="testimonials-grid"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >

    {teacherTestimonials.map((teacher) => (

      <motion.div
        key={teacher.id}
        className="testimonial-card"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -10 }}
      >

        <div className="teacher-photo-wrapper">
          <img
            src={teacher.photo}
            alt={teacher.name}
            className="teacher-photo"
          />
        </div>

        <div className="testimonial-content">
          <h3 className="teacher-name">{teacher.name}</h3>
          <p className="teacher-subject">{teacher.subject}</p>

          <p className="testimonial-message">
            "{teacher.message}"
          </p>
        </div>

        <div className="testimonial-decoration"></div>

      </motion.div>

    ))}

  </motion.div>

</motion.div>

);
}
