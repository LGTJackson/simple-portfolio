import React from "react";
import Title from "./Title";


function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/07247128-98fe-4a45-a1db-c11aba3ed33b"
                method="POST"
                className="flex flex-col w-full md:w-7/12">
                    <Title>Contact me</Title>    
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />

                
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-md">
                        Send Message!
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Contact;