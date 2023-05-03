import React,{useState} from 'react'
import "./contact.css"
import axios from '../axios';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = e =>{
         alert("Thanks for the feedback!");
         e.preventDefault();
         axios.post('/contact/create',{
          name:name,
          email:email,
          message:message
       })
         setName('');
    setEmail('');
    setMessage("");
    }
   
  return (
    <div>
        <div id="heading">
          <h1>Contact Us</h1>
          <p> Any questions or remarks? Just write us a message</p>
        </div>
    <div id="flex">
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required/>
      <label for="email">Email:</label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required/>
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
      <button type="submit" id="send">Send</button>
    </form>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li><span class="label">Address:</span> 123 Main St, Anytown USA</li>
        <li><span class="label">Phone:</span> 555-123-4567</li>
        <li><span class="label">Email:</span> info@example.com</li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Contact