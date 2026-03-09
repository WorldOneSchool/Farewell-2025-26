import React from "react";
import { motion } from "framer-motion";
import AwardCard from "../../components/AwardCard/AwardCard";
import "./Awards.css";

export default function Awards() {
  const awards = [
    { id: 1, title: "Benevolent", recipient: "Vaibhav Karan", description: "", tier: "gold" },
    { id: 2, title: "Roti Vore", recipient: "Ahaan Rastogi", description: "", tier: "gold" },
    { id: 3, title: "Bathroom VIP", recipient: "Pradhyumna Guttula", description: "", tier: "gold" },
    { id: 4, title: "Shakespeare Reborn", recipient: "Voleti Sakshi", description: "", tier: "gold" },
    { id: 5, title: "dominated", recipient: "Sreenika Akoju", description: "", tier: "gold" },
    { id: 6, title: "calm and composed", recipient: "Chaitra Mudiyala", description: "", tier: "gold" },
    { id: 7, title: "Dostana", recipient: "Kancharla Ram Kiran Reddy", description: "", tier: "gold" },
    { id: 8, title: "introvert", recipient: "Nikhil Kintali", description: "", tier: "gold" },
    { id: 9, title: "Official Baby", recipient: "Praneel Reddy Ambati", description: "", tier: "gold" },
    { id: 10, title: "Sneeze Alarm", recipient: "Vrushank Molkar", description: "", tier: "gold" },
    { id: 11, title: "Built In Bestie", recipient: "Rida Imam", description: "", tier: "gold" },
    { id: 12, title: "Keralite", recipient: "Arjun Anumolu", description: "", tier: "gold" },
    { id: 13, title: "Full Time Friendly", recipient: "Srihan Gondlyala", description: "", tier: "gold" },
    { id: 14, title: "Happy virus", recipient: "Soorya Bhubesh", description: "", tier: "gold" },
    { id: 15, title: "Smurf", recipient: "Hemakesh Byna", description: "", tier: "gold" },
    { id: 16, title: "Mallu", recipient: "Eva Ajith", description: "", tier: "gold" },
    { id: 17, title: "sibling no.1", recipient: "Phani Devi Sri Lakshmi Godavarthy", description: "", tier: "gold" },
    { id: 18, title: "siblings no.2", recipient: "Sai Siva Sreeram Godavarthy", description: "", tier: "gold" },
    { id: 19, title: "Miss sunshine", recipient: "Vigneswari Teppala", description: "", tier: "gold" },
    { id: 20, title: "Assignment Accepted", recipient: "Harshith Cheryala", description: "", tier: "gold" },
    { id: 21, title: "Mr.Cool", recipient: "Indraneel Sangle", description: "", tier: "gold" },
    { id: 22, title: "Study Machine", recipient: "R Sai Harshil", description: "", tier: "gold" },
    { id: 23, title: "Dead line destroyer", recipient: "Stuti Talasila", description: "", tier: "gold" },
    { id: 24, title: "Born To Win", recipient: "Lokesh Charan Jonnaganti", description: "", tier: "gold" },
    { id: 25, title: "Prompt And Perfect", recipient: "Pranav Krishna Kollimarla", description: "", tier: "gold" },
    { id: 26, title: "Messy Hair Don't Care", recipient: "Aditya Pranav Marrapu", description: "", tier: "gold" },
    { id: 27, title: "Everything Needs Analysis", recipient: "Saee Kiran Kalambhar", description: "", tier: "gold" },
    { id: 28, title: "Living On Vibes", recipient: "Chaturya Hrishikesh Reddy Avula", description: "", tier: "gold" },
    { id: 29, title: "Speech With Spice", recipient: "Prajith Suhaas Mukkamala", description: "", tier: "silver" },
    { id: 30, title: "Miss sunshine", recipient: "J K Samyuktha", description: "", tier: "silver" },
    { id: 31, title: "yawn specialist", recipient: "Indhu Sahasra Mandapati", description: "", tier: "silver" },
    { id: 32, title: "walking wikipedia", recipient: "Jayant Panidarapu", description: "", tier: "silver" },
    { id: 33, title: "Academic Weapon", recipient: "Om", description: "", tier: "silver" },
    { id: 34, title: "Etiquette Expert", recipient: "Tanish Gorli", description: "", tier: "silver" },
    { id: 35, title: "Font Factory", recipient: "Govarna P Pentakota", description: "", tier: "silver" },
    { id: 36, title: "Hindi Teacher Ka Right Hand", recipient: "Sai Saharsh Neetoori", description: "", tier: "silver" },
    { id: 37, title: "carefree", recipient: "Advait Dubey", description: "", tier: "silver" },
    { id: 38, title: "late submission pro", recipient: "Gayam Jeevan Ashik Reddy", description: "", tier: "silver" },
    { id: 39, title: "Try hard", recipient: "Lorish Bagh", description: "", tier: "silver" },
    { id: 40, title: "", recipient: "Veda Varshit Medikonduri", description: "", tier: "silver" },
    { id: 41, title: "Dog Ate My Homework Level", recipient: "Rajdeep Bhattacharjee", description: "", tier: "silver" },
    { id: 42, title: "Tiny champ", recipient: "Jangita Hasini", description: "", tier: "silver" },
    { id: 43, title: "#World Revolves Around Me", recipient: "B Shravan", description: "", tier: "silver" },
    { id: 44, title: "Too Happy For No Reason", recipient: "Chavali Kiran Kumar", description: "", tier: "silver" },
    { id: 45, title: "Flash", recipient: "Anagh Goka", description: "", tier: "silver" },
    { id: 46, title: "Beauty Over Everything", recipient: "Akula Rakshitha", description: "", tier: "silver" },
    { id: 47, title: "Born For Exams (sarcasm)", recipient: "S Saathwik", description: "", tier: "silver" },
    { id: 48, title: "very helpful", recipient: "Vanij Sri Krishna Kathi", description: "", tier: "silver" },
    { id: 49, title: "chill", recipient: "Subhankar Mahapatra", description: "", tier: "silver" },
    { id: 50, title: "Drama Department", recipient: "Nitya Santoshini Potluri", description: "", tier: "silver" },
    { id: 51, title: "trading guru", recipient: "Shyam Katta", description: "", tier: "silver" },
    { id: 52, title: "express pace", recipient: "Chikkala Sravan Bhargav", description: "", tier: "silver" },
    { id: 53, title: "captain cool", recipient: "Vinnakota Anshul Maurya", description: "", tier: "silver" },
    { id: 54, title: "kind hearted", recipient: "Vaishnavi Akkishetty", description: "", tier: "silver" },
    { id: 55, title: "play boy", recipient: "Charith Jangam", description: "", tier: "silver" },
    { id: 56, title: "forceful laugh", recipient: "Konumuri Bhavya Sree Swetcha", description: "", tier: "bronze" },
    { id: 57, title: "Part Time Student", recipient: "C H Jai Ashish Chadalavada", description: "", tier: "bronze" },
    { id: 58, title: "Too Much English, Bro", recipient: "Adhiraj B", description: "", tier: "bronze" },
    { id: 59, title: "A diamond in the rough", recipient: "Saketh V", description: "", tier: "bronze" },
    { id: 60, title: "friendly", recipient: "Sohan SVS", description: "", tier: "bronze" },
    { id: 61, title: "Main Character", recipient: "Ruthwik Krishna Thummalapally", description: "", tier: "bronze" },
    { id: 62, title: "Foodie", recipient: "Sree Vardhan Mukka", description: "", tier: "bronze" },
    { id: 63, title: "sober", recipient: "Mishfa Zainab", description: "", tier: "bronze" },
    { id: 64, title: "very open", recipient: "Maanvitha Sri Veerapaneni", description: "", tier: "bronze" },
    { id: 65, title: "Teacher’s Favorite Notes", recipient: "Sasanth Reddy Athipalli", description: "", tier: "bronze" },
    { id: 66, title: "silent", recipient: "Yepuri Jessica Joy", description: "", tier: "bronze" },
    { id: 67, title: "Mute button not found", recipient: "Sri Lasya Muppavapu", description: "", tier: "bronze" },
    { id: 68, title: "future politician", recipient: "Dabbani Aditya", description: "", tier: "bronze" },
    { id: 69, title: "arm wrestler", recipient: "Farhan Khan", description: "", tier: "bronze" },
    { id: 70, title: "obdient", recipient: "Sindhuja Chalamalasetty", description: "", tier: "bronze" },
    { id: 71, title: "very enthusiastic", recipient: "Sri Sahasra", description: "", tier: "bronze" },
    { id: 72, title: "singer", recipient: "Moukthika P", description: "", tier: "bronze" },
    { id: 73, title: "silent killer", recipient: "Thenebanda Snehita", description: "", tier: "bronze" },
    { id: 74, title: "helping", recipient: "Mohana Murali Mandava", description: "", tier: "bronze" },
    { id: 75, title: "laughing Buddha", recipient: "Yerukonda Pramath Sri Krishna", description: "", tier: "bronze" },
    { id: 76, title: "late comer", recipient: "Palempalli Grahitha Reddy", description: "", tier: "bronze" },
    { id: 77, title: "intelligent dwarf", recipient: "Vedith Vamshi Krishna Yanna", description: "", tier: "bronze" },
    { id: 78, title: "cricketer", recipient: "Harsh Gandra", description: "", tier: "bronze" },
    { id: 79, title: "once in blue moon", recipient: "Shaik Irfan", description: "", tier: "bronze" },
    { id: 80, title: "leader", recipient: "Samyak NH", description: "", tier: "bronze" },
    { id: 81, title: "celebrity", recipient: "Laasya Siri Jujjavarapu", description: "", tier: "bronze" },
    { id: 82, title: "smart", recipient: "Lakshmi Sahasra M", description: "", tier: "bronze" },
    { id: 83, title: "calm", recipient: "Amuktha Jalapu", description: "", tier: "bronze" },
  ];

  return (
    <motion.div
      className="awards-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="awards-header">
        <h1 className="section-title">Fun Taglines</h1>
        <p className="section-subtitle">
          Creative nicknames given by teachers
        </p>
      </div>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
    </motion.div>
  );
}