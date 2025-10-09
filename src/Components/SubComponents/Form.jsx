import React from 'react'
import Button from './Button'
import emailjs from "emailjs-com";


const Form = () => {

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mxet8ah",     // EmailJS service ID
      "template_htkihdn",    // EmailJS template ID
      e.target,              // form
      "kXszz8WAKe5MQdwdC"      // public key from EmailJS
    )
    .then(
      (result) => {
        alert("Form submitted successfully! ✅");
        e.target.reset();    // reset form
      },
      (error) => {
        alert("Error sending form ❌: " + error.text);
      }
    );
  

  // confirmation email to visitor
 emailjs.sendForm(
      "service_mxet8ah",     // EmailJS service ID
      "template_khw0kj8",    // EmailJS template ID
      e.target,              // form
      "kXszz8WAKe5MQdwdC"
    )
    .then(
      (result) => {
        alert("Form submitted successfully! ✅ Confirmation sent to your email.");
        e.target.reset();
      },
      (error) => {
        alert("Error sending confirmation email ❌: " + error.text);
      }
    );
  
  };
  return (
    <div className="w-full h-full bg-black flex justify-center items-center p-4">
      <form onSubmit={sendEmail} className="w-full max-w-lg bg-black p-4 rounded space-y-4">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-xs font-medium mb-1">
              FULL NAME*
            </label>
            <input
              type="text"
              placeholder="Name"
              name='user_name'
              required
              className="w-full p-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-white text-xs font-medium mb-1">
              PHONE NO*
            </label>
            <input
              type="text"
              placeholder="Phone"
              name='user_phone'
              required
              className="w-full p-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-white text-xs font-medium mb-1">
            EMAIL ADDRESS*
          </label>
          <input
            type="email"
            placeholder="Email"
            name='user_email'
            required
            className="w-full p-2 rounded bg-white text-black text-sm outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-white text-xs font-medium mb-1">
            MESSAGE*
          </label>
          <textarea
            placeholder="Message"
            required
            minLength={5}
            name='message'
            rows="3"
            className="w-full p-2 rounded bg-white text-black text-sm outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
      <Button type1={"submit"} text1={"Submit"}/>
      </form>
    </div>
  )
}

export default Form



// service_mxet8ah
//  pub kXszz8WAKe5MQdwdC
//  htkihdn