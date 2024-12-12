import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Contact = () => {

    async function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('/api/mailer', {
            method: 'post',
            body: formData
        })
    }

    return (
        <div className="">
            <Heading title="Contact Me"/>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input id="form-email" className="w-full mt-10 rounded-md" placeholder="Email ID*" type="email" required></input>
                    <textarea id="form-description" className="w-full mt-4 rounded-md" placeholder="Message" type="multiline" required></textarea>
                    <button classname="btn bg-[#24272C] py-1 min-w-[100px] mt-7 mb-14" type="submit">Connect</button>
                </form>
                

                {/* <Button txt="Let's Connect" classname="btn bg-[#24272C] py-1 min-w-[100px] mt-7 mb-14"/> */}
            </div>
        </div>
    )
}

export default Contact;