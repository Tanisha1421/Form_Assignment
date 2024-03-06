
import { useState } from "react";
import "./app.css";
import axios from "axios";

const App = () => {

  
  const[username, setName] = useState("");
  const[email, setEmail] = useState("");
  const[Phone, setPhone] = useState("");
  const[Message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    try{
      e.preventDefault();
      alert("Form Submitted Successfully");
      const api_url = process.env.API_ENDPOINT_URI;
      const api = await axios.post(`${api_url}`, {
        Name : username,
        Email : email,
        Phone : Phone,
        Message : Message
      });
      console.log(api, "api_response");
    }catch(error){
      console.error(error);
      throw error;
    }
  }


  return (
    <div className="app">
      <form onSubmit={(e)=> handleSubmit(e)}>
        <h1>Contact Us</h1>
        <>
          <div class = "input">
              <label>UserName</label>
              <input name = "username"  type = "text" placeholder = "Username" errorMessage = "Username should be 3-16 characters and shouldn't include any special character!" pattern = "^[A-Za-z0-9]{3,16}$"  required = "true" onChange={(e) => setName(e.target.value)} />
          </div>
          <div class = "input">
              <label>Email</label>
              <input name = "email"  type = "text" placeholder = "Email" errorMessage = "It should be a valid email address!"   required = "true" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div class = "input">
              <label>Phone</label>
              <input name = "Phone"  type = "tel" placeholder = "Phone" errorMessage = "Must Contain 10 digits" pattern = "[0-9]{10}"  required = "true" onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div class = "input">
              <label>Message</label>
              <input name = "Message"  type = "text" placeholder = "Message"  pattern = "^[A-Za-z0-9]{3,16}$"  required = "true" onChange={(e) => setMessage(e.target.value)}/>
          </div>
        </>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;