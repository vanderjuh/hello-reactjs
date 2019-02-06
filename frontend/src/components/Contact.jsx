import React from 'react'
import './css/contact.css'

export default props =>
    <section id="contact">
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <form>
            <input placeholder="Your Name *" type="text" name="name" id="" />
            <input placeholder="Your Email *" type="text" name="email" id="" />
            <input placeholder="Your Phone" type="text" name="phonenumber" id="" />
            <textarea name="message" id="" cols="30" rows="10" defaultValue="Write something..." />
            <button id="sendMessage" >Send Message</button>
        </form>
    </section>