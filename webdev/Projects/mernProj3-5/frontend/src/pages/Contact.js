import React from "react";
import Layout from "../componets/Layout";
import {TbPhoneCall} from 'react-icons/tb'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
  return (
    <Layout>
        <div className="row">
      <div className=" col-md-6 mt-5">
        <img src="https://th.bing.com/th/id/OIP.cFy_VwWWq2mwLOWhbXMUmAHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="xyz"></img>
      </div>
      <div className="col-md-6 mt-5">
        <h1>Contact us</h1>
        <ul id="contactlist">
            <li><TbPhoneCall/> +916364692393</li>
            <li><AiOutlineMail/>xyzk@mailmail.com</li>
        </ul>
      </div>
      </div>
    </Layout>
  );
}

export default Contact;
