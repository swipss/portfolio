import { useRef, useState } from "react";
import Divider from "../Divider";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import loader from "../../assets/loader.svg";
import Loader from "../../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef<any>();

  const success = () =>
    toast.success("Your message has been sent successfully!", {
      position: "top-center",
    });

  const errorr = () => {
    toast.error("Something went wrong!", {
      position: "top-center",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.SERCIVE_ID,
        import.meta.env.TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_ID
      )
      .then(
        () => {
          setLoading(false);
          success();
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          errorr();
        }
      );
  };
  return (
    <article className="p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">Contact Form</h2>
      <Divider />
      <form onSubmit={handleSubmit} ref={form}>
        <div className="mt-4">
          <input
            type="text"
            name="user_name"
            id="name"
            className="block w-full px-4 py-3 text-white transition-all border border-transparent shadow-sm rounded-2xl bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Full name"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            name="user_email"
            id="email"
            className="block w-full px-4 py-3 text-white transition-all border border-transparent shadow-sm rounded-2xl bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <textarea
            name="message"
            id="message"
            className="block w-full h-32 px-4 py-3 text-white transition-all border border-transparent shadow-sm rounded-2xl bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          disabled={!fullName || !email || !message || loading}
          className="flex items-center justify-center w-full gap-2 p-3 mt-4 text-yellow-400 transition-all shadow-xl disabled:hover:bg-neutral-800 disabled:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent rounded-2xl hover:bg-neutral-700 bg-neutral-800"
        >
          {!loading ? (
            <>
              <PaperAirplaneIcon className="inline-block w-5 h-5 -rotate-45" />
              Send message
            </>
          ) : (
            <Loader />
          )}
        </button>
        <ToastContainer />
      </form>
    </article>
  );
};

export default Contact;
