import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Contact = () => {

    return (
        <div className="">
            <Heading title="Contact Me"/>
            <div>
                <input className="w-full mt-10 rounded-md" placeholder="Email ID*" type="email" required></input>

                <textarea className="w-full mt-4 rounded-md" placeholder="Message" type="multiline" required></textarea>

                <Button txt="Let's Connect" classname="btn bg-[#24272C] py-1 min-w-[100px] mt-7 mb-14"/>
            </div>
        </div>
    )
}

export default Contact;