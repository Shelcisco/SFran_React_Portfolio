import React, { useState } from "react"; 
import emailjs from 'emailjs-com';




export default function Main({page}){

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    var [email,setEmail] = useState ("");
    var [emailError,setEmailError] = useState (false);
    function validateEmail () {
        setEmailError (!validEmail.test(email))
    }

    var [name,setName] = useState ("");
    var [nameError,setNameError] = useState (false);
    function validateName () {
        setNameError (name.trim()=="")

    }

    var [message,setMessage] = useState ("");
    var [messageError,setMessageError] = useState (false);
    function validateMessage () {
        setMessageError (message.trim()=="")

    }

    
const renderPage = ()=>{
    switch (page){
        case("about"):
        return (
            <div>
                <h1>About Me</h1>
                <p> <img src="/SFran_React_Portfolio/Mee.jpg" height="100" alt="" id = "me"></img> Hi there, my name is Shelby. After working in financials for years I wanted to try something more creative than crunching numbers, I took a big step and signed up for the UW's coding bootcamp.</p> 
 <p>While there's nothing wrong with crunching, I've found I prefer coding! I'm consistently working to improve my skills, please see my portfolio to look at what I've built so far. Thank you!</p>
            </div>
        )
        case("main"):
        return (
            <div className="text-center">
                <h1>Portfolio</h1>
                <div className="flex-row justify-center">
                <div className= "card-container flex-col">
                <img src="/SFran_React_Portfolio/cosmic.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Cosmic Climate </h3>
                <p id="text">Collabarative Project using mulitple Server Side APIs</p>
                <div className="flex-row text-center">
                    <br></br>
                <button className="card-btn"><a href="https://github.com/dingbat-weasel/Cosmic-Climate" > Github Repo</a></button>
                <button className="card-btn"><a href="https://dingbat-weasel.github.io/Cosmic-Climate/" > Live Site</a></button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/SFran_React_Portfolio/sleep.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Sleep Sync </h3>
                <p id="text">Collabarative Project Using MVC paradigm</p>
                <div className="flex-row text-center">
                <br></br>
                <button className="card-btn"><a href="https://github.com/jbungurait/Sleep_Tracker_App" > Github Repo</a></button>
                <button className="card-btn"><a href="https://sleep--sync.herokuapp.com/" > Live Site</a></button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/SFran_React_Portfolio/hozho.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Hozho Weaving Network </h3>
                <p id="text">Collabarative project using MERN and GraphQL</p>
                <div className="flex-row text-center">
                <br></br>
                <button className="card-btn"><a href="https://github.com/Shelcisco/Hozho-Weaving-Network" > Github Repo</a></button>
                <button className="card-btn"><a href="https://hozho-weaving-network.herokuapp.com/" > Live Site</a></button>
                </div>
                </div>
                </div>
                <div className="flex-row justify-center">
                <div className= "card-container flex-col">
                <img src="/SFran_React_Portfolio/planner.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Workplace Planner </h3>
                <p id="text">Bootcamp Challenge: Scheduler, HTML/CSS powered by jQuery</p>
                <div className="flex-row text-center">
                <br></br>
                <button className="card-btn"><a href="https://github.com/Shelcisco/Workplace-Planner" > Github Repo</a></button>
                <button className="card-btn"><a href="https://shelcisco.github.io/Workplace-Planner/" > Live Site</a></button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/SFran_React_Portfolio/notetaker.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Note Taker Express </h3>
                <p id="text">Bootcamp Challenge: Note Taker using express.js</p>
                <div className="flex-row text-center">
                <br></br>
                <button className="card-btn"><a href="https://github.com/Shelcisco/Note-Taker-Express" > Github Repo</a></button>
                <button className="card-btn"><a href="https://shelcisco-note-taker-express.herokuapp.com/" > Live Site</a></button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/SFran_React_Portfolio/codequiz.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Coding Quiz </h3>
                <p id="text">Bootcamp Challenge: Timed Quiz, HTML/CSS powered by JS</p>
                <div className="flex-row text-center">
                <br></br>
                <button className="card-btn"><a href="https://github.com/Shelcisco/Coding-Quiz" > Github Repo</a></button>
                <button className="card-btn"><a href="https://shelcisco.github.io/Coding-Quiz/" > Live Site</a></button>
                </div>
                </div>
                </div>
               </div>
        )

        case("resume"):
        return (
            <div className="text-center">
                <h1>Resume</h1>
                <div className= "res-container text-center justify-center">  
                <p><a href="https://drive.google.com/file/d/1sXwWvnVi-Di_GWlUg60j1fWnRr9_a3Po/view?usp=drive_link" download> Download</a>Resume</p> 
                
                <div className="flex-row justify-center">          
      <div id="text">
      <h3>Front-end Proficiencies</h3>
        <p >HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>JQuery</p>
        <p>responsive design</p>
        <p>React</p>
        <p>Bootstrap</p>
      </div>

      <br></br>
      <br></br>
      
      <div id="text">
      <h3 id="text">Back-end Proficiencies</h3>
        <p >APIs</p>
        <p>Node.js</p>
        <p>Express</p>
        <p>MySQL, Sequelize</p>
        <p>MongoDB, Mongoose</p>
        <p>REST</p>
        <p>GraphQL</p>
      </div>
      </div>
            </div>
            </div>
        )

        case("contact"):
        

            // Validation functions and submit handler
            const validateEmail = () => {
                setEmailError(!validEmail.test(email));
            };
        
            const validateName = () => {
                setNameError(name.trim() === "");
            };
        
            const validateMessage = () => {
                setMessageError(message.trim() === "");
            };
        
            const handleSubmit = (event) => {
                event.preventDefault();
        
                validateEmail();
                validateName();
                validateMessage();
        
                if (emailError || nameError || messageError) {
                    return;
                }
        
                const templateParams = {
                    email: email,
                    name: name,
                    message: message,
                };
        
                emailjs
                    .send('service_ai8g391', 'template_bnru5cc', templateParams, 'IWz1OiJF9cOM3KUuc')
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('Email sent successfully');
                    }, (error) => {
                        console.log('FAILED...', error);
                        alert('Failed to send email. See console for more details.');
                    });
            };
        
            // JSX for the contact form
            return (
                <form className="justify-center" onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <input className="form-input"
                           type="email"
                           placeholder="Email"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
                           onBlur={validateEmail}>
                    </input>
                    {emailError && <h5 className="error">Please enter a valid email</h5>}
                    <br></br>
                    <input className="form-input"
                           type="text"
                           placeholder="Name"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                           onBlur={validateName}>
                    </input>
                    {nameError && <h5 className="error">Please enter name</h5>}
                    <br></br>
                    <input className="form-input"
                           type="text"
                           placeholder="Message"
                           value={message}
                           onChange={(event) => setMessage(event.target.value)}
                           onBlur={validateMessage}>
                    </input>
                    {messageError && <h5 className="error">Please enter a message</h5>}
                    <br></br>
                    <button type="submit" className="btn">Submit</button>
                    <br></br>
                </form>
            );
        


            // <form className="justify-center">
            //     <h1>Contact</h1>
            //     <input className="form-input"
            //     type="email" 
            //     placeholder = "Email"
            //     value = {
            //         email
            //     }
            //     onChange={(event)=>setEmail(event.target.value)}
            //     onBlur={validateEmail}
            //     >
            //     </input>
            //     {emailError && <h5 className="error">Please enter valid email</h5>}
            //     <br></br>
            //     <input className="form-input"
            //     type="text" 
            //     placeholder = "Name"
            //     value = {
            //         name
            //     }
            //     onChange={(event)=>setName(event.target.value)}
            //     onBlur={validateName}
            //     >
            //     </input>
            //     {nameError && <h5 className="error" >Please enter name</h5>}
            //     <br></br>
            //     <input className="form-input"
            //     type="text" 
            //     placeholder = "Message"
            //     value = {
            //         message
            //     }
            //     onChange={(event)=>setMessage(event.target.value)}
            //     onBlur={validateMessage}
            //     >
            //     </input>
            //     {messageError && <h5 className="error" >Please enter message</h5>}
            //     <br></br>
            //     <button className="btn">Submit</button>
            //     <br></br>
            // </form>
        
    }
}

    return(
<div className="container">
    {renderPage()}
</div>
    )
}

