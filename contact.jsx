
/* eslint-disable react/no-unescaped-entities */

import './contact.css'

function Contact () {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ccf9da21-39c5-4128-9d50-1db63c0736a9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("messege send") ;
    } 
    };


    return (
        <div className="contact" id='contact'>
            <h1>Get in touch</h1>
            <div className="contact-countainer">
                <div className="talk">
                    <h1>Let's talk</h1>
                    <p>
                        I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on, you can cantact anytime
                    </p>
                    <div className="email">kbdissame@gmail.com</div>
                    <div className="phone">+213 781243966</div>
                    <div className="local">tlemcen, Algeria</div>
                </div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">your name</label>
                    <input type="text" id='name' placeholder='enter your name' name='name'/>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='enter your email' name='email'/>
                    <label htmlFor="messege">write your messege here</label>
                    <textarea id="messege" placeholder='enter your messege' name='messege'></textarea>
                    <button type='submit'>Submit now</button>
                </form>
            </div>
        </div>
    ) ;
}


export default Contact ;