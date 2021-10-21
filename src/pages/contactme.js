import React from 'react'
import emailjs from 'emailjs-com';

const ContactMe = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            'service_qrpghkh',
            'template_wxab6mf', 
            e.target, 
            'user_kmK9IfaOprdkk54lRTNeG'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err)); 
        e.target.reset();
    }
    
    return (
        <div className="container border" 
        style={{marginTop: "50px", 
                width: '50%', 
                backgroundImage: `url('https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }}>
            <h1>Contact Me</h1>
            <form onSubmit={sendEmail}>
                <label>
                    Name
                </label>
                <input type="text" name="name">
                </input>
                <label>
                    Email
                </label>
                <input type="email" name="user_email">
                </input>
                <label>
                    Message
                </label>
                <textarea name="message" rows="4">
                </textarea>
                <input type='submit' value='send'/>

            </form>
        </div>
    )
}

export default ContactMe;