import { useEffect } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Contact = () => {

    async function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('/api/mailer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: formData
        });

        console.log(response, 'res');

    }


    return (
        <div className="">
            <Heading title="Contact Me"/>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input id="form-email" className="w-full mt-8 rounded-md focus: outline-none" placeholder="Email ID*" type="email" required></input>
                    <textarea id="form-description" className="w-full resize-none mt-4 rounded-md focus: outline-none" placeholder="Message" type="multiline" required></textarea>
                    <button classname="btn bg-[#24272C] py-1 min-w-[100px] mt-7 mb-14" type="submit">Connect</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;