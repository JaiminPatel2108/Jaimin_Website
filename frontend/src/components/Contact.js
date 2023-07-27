import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactSubmit = async (e) => {
    e.preventDefault();
    // toast("you have submit the form")
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        { name, email, mobile, subject, message }
      );
      console.log(data);
      if (data?.success) {
        toast.success("Your response recorded Successfully");
        setName("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
        toast.error("this is my error")
    }
    
  };

  return (
    <>
      {/* <p style={{ color: "white" }}>this is the contact page</p> */}
      <div className="contactContainer light">
        <div className="contactPart1" style={{ color: "white" }}>
          <div className="contactform">
            <p
              style={{
                backgroundColor: "transparent",
                fontSize: "30px",
                margin: "20px 80px",
              }}
            >
              Contact Form
            </p>
            <form
              className="form"
              style={{ backgroundColor: "transparent" }}
              onSubmit={contactSubmit}
            >
              <label className="label" htmlFor="">
                Full Name
              </label>
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label className="label" htmlFor="">
                Email
              </label>
              {/* <input className="input" type="email" /> */}
              <input
                className="input"
                type="email"
                name="email"
                id=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="label" htmlFor="">
                Mobile
              </label>
              {/* <input className="input" type="email" /> */}
              <input
                className="input"
                type="number"
                name="mobile"
                id=""
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />

              <label className="label" htmlFor="">
                Subject
              </label>
              <input
                className="input"
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />

              <label className="label" htmlFor="">
                Message
              </label>
              <textarea
                style={{
                  margin: "2px 40px",
                  backgroundColor: "#515456",
                  border: "none",
                  borderRadius: "5px",
                }}
                name=""
                id=""
                cols="30"
                rows="5"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>

              <button className="submitbtn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="contactPart2" style={{ color: "white" }}>
          <div className="details">
            <p className="p2" style={{ fontSize: "40px" }}>
              {" "}
              Contact Details
            </p>
            <p className="p2">
              <i className="fa-solid fa-location-dot"></i> LDCE College,
              Ahemdabad, India
            </p>
            <p className="p2">
              <i className="fa-regular fa-envelope"></i> pjaimind031@gmil.com
            </p>
            <p className="p2">
              <i className="fa-solid fa-phone"></i> +91 8160787125
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
