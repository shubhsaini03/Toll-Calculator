import React from 'react'
import Container from './components/Containers'

import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Developers = () => {
  return (
    <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7236358.783983671!2d75.7313!3d27.6747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4ee0e629867%3A0x3411b70721fd0ee9!2z4Kao4Ka_4Kaw4KeN4Kau4Ka-4KajIOCmqOCml-CmsCwgQnJpamxhbHB1cmEsIOCmnOCmr-CmvOCmquCngeCmsCwg4Kaw4Ka-4Kac4Ka44KeN4Kal4Ka-4KaoIDMwMjAxOQ!5e0!3m2!1sbn!2sin!4v1702817417885!5m2!1sbn!2sin" 
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className=" text-light w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="  text-light form-control button">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
181-A Nirman Nagar-E ajmer Road, jaipur, Rajasthan
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 8264954234">+91 8905268611</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:shubhsaini12023@gmail.com">
                        shubhsaini12023@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
  )
}

export default Developers