import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, CheckCircle, Send, MessageCircle } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("submitting");

    emailjs
      .sendForm(
        "service_rq3ypqx",
        "template_so2e5v9",
        form.current,
        {
          publicKey: "Z1gAeLV7E8qcW_cBE",
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-32 px-6 lg:px-12 overflow-hidden flex flex-col items-center"
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-emerald-500/10 blur-[150px] mix-blend-screen animate-pulse-glow"></div>
        <div
          className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[150px] mix-blend-screen animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]"
          style={{ backgroundSize: "50px 50px" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center relative">
        {/* HEADING SECTION */}
        <div className="text-center mb-24 flex flex-col items-center relative animate-float">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 relative inline-block">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Touch
            </span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-full"></span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mt-8 tracking-wide">
            Have a project in mind? Let’s{" "}
            <span className="text-emerald-400 font-medium">work together</span>.
          </p>
        </div>

        {/* MAIN CONTENT (Split Layout) */}
        <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-12 relative items-start">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="flex flex-col gap-6 w-full lg:w-5/12 z-20">
            {/* Message Glass Card */}
            <div className="bg-gray-900/30 backdrop-blur-2xl rounded-3xl p-10 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] animate-float-reverse hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-500 hover:-translate-y-2 group">
              <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-500 relative">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                I’m available for freelance work and awesome collaborations.
                Drop me a message and let's build something phenomenal.
              </p>
            </div>

            {/* Floating Contact Blocks */}
            {[
              {
                icon: <Mail />,
                text: "hello@augstinaugustin5@gmail.com",
                label: "Email",
                colorClass: "text-cyan-400",
                bgClass: "bg-cyan-500/10",
                border: "hover:border-cyan-400",
                shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
                float: "animate-float",
                delay: "0.2s",
              },
              {
                icon: <Phone />,
                text: "+91 72001 73817",
                label: "Phone",
                colorClass: "text-emerald-400",
                bgClass: "bg-emerald-500/10",
                border: "hover:border-emerald-400",
                shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
                float: "animate-float-fast",
                delay: "0.4s",
              },
              {
                icon: <MapPin />,
                text: "Chennai, India",
                label: "Location",
                colorClass: "text-purple-400",
                bgClass: "bg-purple-500/10",
                border: "hover:border-purple-400",
                shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
                float: "animate-float-reverse",
                delay: "0.6s",
              },
            ].map((info, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 bg-gray-900/30 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-gray-800 ${info.float} hover:scale-[1.03] hover:-translate-y-2 ${info.border} ${info.shadow} transition-all duration-500 cursor-default group`}
                style={{ animationDelay: info.delay }}
              >
                <div
                  className={`p-4 md:p-5 rounded-2xl ${info.bgClass} ${info.colorClass} group-hover:scale-110 transition-transform duration-500`}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm md:text-base mb-1 tracking-wider uppercase">
                    {info.label}
                  </p>
                  <p className="font-bold text-gray-200 text-lg group-hover:text-white transition-colors">
                    {info.text}
                  </p>
                </div>
              </div>
            ))}

            {/* WhatsApp + Social Links */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://wa.me/7200173817"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500/20 text-green-400 border border-green-500/30 px-6 py-4 rounded-full font-bold hover:bg-green-500 hover:text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-125 transition-transform" />{" "}
                Chat on WhatsApp
              </a>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
                <a
                  href="https://github.com/alsanroj"
                  className="p-4 rounded-full bg-gray-900/40 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alsan-roj/"
                  className="p-4 rounded-full bg-gray-900/40 border border-gray-700 hover:border-emerald-400 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="w-full lg:w-7/12 relative z-20">
            <div className="bg-gray-900/30 backdrop-blur-3xl border border-gray-800 rounded-[3rem] p-10 md:p-14 animate-float hover:border-emerald-500/30 hover:shadow-[0_0_60px_rgba(16,185,129,0.1)] transition-all duration-700 shadow-2xl relative overflow-hidden">
              {/* Internal Glow Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

              {status === "success" ? (
                /* SUCCESS FEEDBACK UI */
                <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center animate-float-reverse">
                  <div className="bg-emerald-500/20 p-6 rounded-full mb-8 relative">
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-emerald-400"></div>
                    <CheckCircle className="w-20 h-20 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400 text-lg text-center max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible{" "}
                    <span className="inline-block animate-bounce">🚀</span>
                  </p>
                </div>
              ) : (
                /* THE FORM */
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-6 relative z-10"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className="w-full animate-float-fast"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label className="block text-gray-400 text-sm font-medium mb-2 ml-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="John Doe"
                        required
                        className="w-full bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500 rounded-2xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                      />
                    </div>
                    <div
                      className="w-full animate-float-reverse"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <label className="block text-gray-400 text-sm font-medium mb-2 ml-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500 rounded-2xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div
                    className="w-full animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <label className="block text-gray-400 text-sm font-medium mb-2 ml-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="project_type"
                        className="w-full bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500 rounded-2xl px-6 py-5 text-white appearance-none focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer"
                      >
                        <option value="web" className="bg-gray-900 text-white">
                          Web Development
                        </option>
                        <option value="app" className="bg-gray-900 text-white">
                          Full Stack Application
                        </option>
                        <option value="ui" className="bg-gray-900 text-white">
                          UI/UX Design
                        </option>
                        <option
                          value="other"
                          className="bg-gray-900 text-white"
                        >
                          Other Inquiry
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full animate-float-fast"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <label className="block text-gray-400 text-sm font-medium mb-2 ml-2">
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell me about your amazing project..."
                      rows="5"
                      name="message"
                      required
                      className="w-full bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500 rounded-2xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <div
                    className="w-full mt-4 animate-float"
                    style={{ animationDelay: "0.9s" }}
                  >
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={`w-full flex items-center justify-center gap-3 py-5 rounded-full font-extrabold text-xl transition-all duration-500 group ${
                        status === "submitting"
                          ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                          : "bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0a0a0a] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transform hover:-translate-y-2 hover:scale-[1.02]"
                      }`}
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-3">
                          Sending...{" "}
                          <div className="w-6 h-6 border-b-2 border-black rounded-full animate-spin"></div>
                        </span>
                      ) : (
                        <span className="flex items-center gap-3 relative z-10">
                          Send Message{" "}
                          <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
