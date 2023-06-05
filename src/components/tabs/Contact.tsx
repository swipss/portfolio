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
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_ID
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
    <article className="p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg xl:p-8 bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">Contact Form</h2>
      <Divider />
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2"
      >
        <div className="w-full col-span-2 md:col-span-1">
          <input
            type="text"
            name="user_name"
            id="name"
            className="w-full px-4 py-3 text-white transition-all border border-transparent shadow-sm rounded-2xl bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Full name"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="w-full col-span-2 md:col-span-1">
          <input
            type="email"
            name="user_email"
            id="email"
            className="w-full px-4 py-3 text-white transition-all border border-transparent shadow-sm rounded-2xl bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2">
          <textarea
            name="message"
            id="message"
            className="block w-full h-32 col-span-2 px-4 py-3 text-white transition-all border border-transparent shadow-sm rounded-2xl bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2 md:col-start-2 md:col-span-1 md:w-max md:justify-self-end">
          <button
            disabled={!fullName || !email || !message || loading}
            className="flex items-center justify-center w-full gap-2 px-5 py-3 text-yellow-400 transition-all shadow-xl disabled:hover:bg-neutral-800 disabled:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent rounded-2xl hover:bg-neutral-700 bg-neutral-800"
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
        </div>
        <ToastContainer />
      </form>
    </article>
  );
};

export default Contact;
