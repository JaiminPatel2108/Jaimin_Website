import React,{useState} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Hireme() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [project_description, setProject_description] = useState("");

  const hireMeSubmit = async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:5000/api/v1/auth/hireme",{name,email,mobile,subject,project_description})
      const {res} = await axios.post("https://jaiminpatelstudent-default-rtdb.firebaseio.com/studentdata.json",{name,email,mobile,subject,project_description})
      // const res = await axios.post("")
      console.log(data);
      if(data.success){
        toast.success(data.message)
      setName("")
      setEmail("")
      setMobile("")
      setSubject("")
      setProject_description("")
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  }

  return (
    <>
      <div className="hiremecontainer" style={{ color: "white" }}>
        <h3 className="label" style={{marginBottom:"20px"}}>what program are you looking for?</h3>

        <form
          className="form"
          action=""
          style={{ backgroundColor: "transparent" }}
          onSubmit={hireMeSubmit}
        >
          {/* <label className="label" htmlFor="">Full Name</label> */}
          <input className="input" type="text" placeholder="Name" style={{margin:"10px 40px"}} value={name}
            onChange={(e)=>{setName(e.target.value)}}/>

          {/* <label className="label" htmlFor="">Email</label> */}
          {/* <input className="input" type="email" /> */}
          <input
            className="input"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            style={{margin:"10px 40px"}}
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            className="input"
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
            style={{margin:"10px 40px"}}
            value={subject}
            onChange={(e)=>{setSubject(e.target.value)}}
          />
          <input
            className="input"
            type="number"
            name="mobile"
            id=""
            placeholder="Mobile"
            style={{margin:"10px 40px"}}
            value={mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
          />

          

          {/* <label className="label" htmlFor="">Message</label> */}
          <textarea
            style={{
              margin: "10px 40px",
              backgroundColor: "#515456",
              border: "none",
              borderRadius: "5px",
            }}
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Project Description"
            value={project_description}
            onChange={(e)=>{setProject_description(e.target.value)}}
          ></textarea>

          <button className="submitbtn" type="submit">
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}
