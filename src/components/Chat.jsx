import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";

import me from "@/assets/images/me.webp";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Chat({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [text, setText] = React.useState("");
  const [chat, setChat] = React.useState([
    {
      role: "assistant",
      content: "Hola, soy el clon de Orlando. ¿Qué te gustaría saber de mí?",
      animate: true,
    },
  ]);
  const [loading, setLoading] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [emotion, setEmotion] = React.useState("normal");

  const [q, setQ] = React.useState("");

  const emotions = {
    happy: "😄",
    sad: "😢",
    surprised: "😲",
    confused: "😕",
    pokerface: "😐",
    excited: "😁",
    scared: "😨",
    in_love: "😍",
    angry: "😠",
    neutral: "🙂",
    shy: "😳",
    nervous: "😅",
  };

  const chatRef = useChatScroll(chat);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const removeAnimation = (index) => {
    const newChat = [...chat];
    newChat[index].animate = false;
    setChat(newChat);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setFocus(false);

    const query = text;
    setQ(query);
    setText("");

    if (text.trim() === "") {
      setText("");
      return;
    }

    setChat((prev) => [...prev, { role: "user", content: query }]);

    let res;
    let message = "";
    let role;
    let function_call;

    await axios
      .post("/api/chat", {
        query: query,
      })
      .then(function (response) {
        // console.log(response.data.message);

        try {
          const regex = /{(.*)}/;
          const matches = regex.exec(response.data.message.content);
          const stringify = matches[1].replace(/`/g, '"');
          const objectJson = JSON.parse("{" + stringify + "}");

          res = objectJson;

          message = res.message;
          setEmotion(res.emotion);
          setLoading(false);
        } catch (error) {
          // console.log(error);
          message = response.data.message.content;
          setEmotion("nervous");
          setLoading(false);
        }

        role = response.data.message.role;
        function_call = response.data.message.function_call;
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError(true);
        setIsTyping(false);
      });

    let newMessage;

    if (function_call) {
      newMessage = {
        role,
        content: message,
        animate: true,
        function_call,
      };
    } else {
      newMessage = {
        role,
        content: message,
        animate: true,
      };
    }

    // console.log(newMessage);

    setChat((prev) => [...prev, newMessage]);

    setIsTyping(true);
  };

  const commentEnterSubmit = (e) => {
    if (e.key === "Enter" && e.shiftKey == false) {
      const data = { content: e.target.value };
      return handleSubmit();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    if (isTyping) {
      if (chatRef.current) {
        setTimeout(() => {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }, 300);
      }
    }
  }, [isTyping]);

  return (
    <>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-[#00000085] z-20 cursor-pointer backdrop-blur-sm transition-all duration-500 ease-in-out"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            defaultValue={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: 100 }}
            defaultValue={{ opacity: 0, y: 100 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[#f8efff] dark:bg-[#09030e] md:w-5/6 lg:w-2/6 w-5/6 h-5/6 fixed p-4 rounded-xl shadow-xl z-30 top-0.5 left-0.5 right-0.5 bottom-0.5 m-auto flex flex-col"
          >
            <div
              className="absolute top-2 right-2 p-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <GrClose className="dark:text-white text-black" />
              {/* <i className="fa-solid fa-xmark"></i> */}
            </div>
            <div className="flex gap-3 items-end">
              <div className="rounded-full  bg-purple-400 w-20 relative">
                <div className="absolute rounded-full text-3xl h-7 w-7 flex justify-center items-center right-0 top-0 z-10">
                  {error
                    ? "😵"
                    : loading
                    ? "🤔"
                    : focus
                    ? "😳"
                    : isTyping
                    ? emotions[emotion] || "😀"
                    : "🙂"}
                </div>
                <Image
                  className="rounded-full"
                  src={me}
                  width={512}
                  height={512}
                  alt="me"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold text-lg">Orlando Mina Clon</p>
                <div className="flex items-center gap-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      error ? "bg-red-500" : "bg-green-500"
                    }`}
                  ></div>
                  <p>{error ? "Offline" : "Online"}</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-purple-500 h-0.5 mt-4"></div>
            <div
              ref={chatRef}
              className={`flex-1 flex-col pb-2 w-full gap-10 overflow-y-auto`}
            >
              {chat.map((message, index) => (
                <Message
                  key={index}
                  index={index}
                  message={message}
                  setLoading={setLoading}
                  removeAnimation={removeAnimation}
                  setIsTyping={setIsTyping}
                  query={q}
                  setEmotion={setEmotion}
                  setChat={setChat}
                />
              ))}
            </div>
            <motion.form
              layout
              id="chatForm"
              onSubmit={handleSubmit}
              className={`h-10 flex border-t-2 border-purple-500 dark:bg-[#ffffff36] bg-[#00000015] rounded-b-xl w-full items-start overflow-hidden`}
            >
              <textarea
                className="p-2 flex h-full w-9/12 border-none b resize-none outline-none bg-[#00000000] break-words float-left textarea"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                value={loading ? "..." : text}
                onChange={handleChange}
                disabled={error || loading || isTyping}
                form="chatForm"
                onKeyPress={commentEnterSubmit}
                required
              />
              <button
                type="submit"
                disabled={error || loading || isTyping || text.length === 0}
                className={`flex w-3/12 h-10 flex-col justify-center items-center ${
                  error || loading || text.length === 0
                    ? "text-gray-500"
                    : "text-white"
                } hover:bg-[#da20ff1f]`}
              >
                📤
                {/* <i className="fa-regular fa-paper-plane"></i> */}
              </button>
            </motion.form>
          </motion.div>
        </>
      )}
    </>
  );
}

function Message({
  message,
  index,
  removeAnimation,
  setLoading,
  setIsTyping,
  setEmotion,
  setChat,
  query,
}) {
  const { content, role, function_call } = message;

  const { setTheme } = useTheme();
  const [t, i18n] = useTranslation("global");
  let router = useRouter();

  function executeFunction(name, args) {
    // console.log(name, args);
    switch (name) {
      case "changeTheme":
        changeTheme(query, JSON.parse(args).theme);
        break;
      case "changeLanguage":
        changeLanguage(query, JSON.parse(args).language);
        break;
      case "goToProjects":
        router.push("/projects");
        break;
      default:
        break;
    }

    setLoading(false);
    setIsTyping(false);
    removeAnimation(index);
  }

  async function replyFunction(query, function_call, info) {
    setLoading(true);
    // console.log(query, function_call, info);
    let res, role, message;
    await axios
      .post("/api/replyFunction", {
        query,
        function_call,
        info,
      })
      .then(function (response) {
        try {
          const regex = /{(.*)}/;
          const matches = regex.exec(response.data.message.content);
          const stringify = matches[1].replace(/`/g, '"');
          const objectJson = JSON.parse("{" + stringify + "}");

          res = objectJson;

          message = res.message;
          setEmotion(res.emotion);
          setLoading(false);
        } catch (error) {
          // console.error(error);
          message = response.data.message.content;
          setEmotion("nervous");
          setLoading(false);
        }

        role = response.data.message.role;
        const function_call_ = response.data.message.function_call;

        let newMessage;

        if (function_call_) {
          newMessage = {
            role,
            content: message,
            animate: true,
            function_call: function_call_,
          };
        } else {
          newMessage = {
            role,
            content: message,
            animate: true,
          };
        }

        // console.log(newMessage);

        setChat((prev) => [...prev, newMessage]);

        setIsTyping(true);
      });
  }

  async function changeTheme(query, theme) {
    // console.log(query);
    setTheme(theme);
    await replyFunction(query, function_call, `Theme changed to: ${theme}`);
  }

  async function changeLanguage(query, language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    await replyFunction(
      query,
      function_call,
      `Language changed to: ${language}`
    );
  }

  return (
    <div
      className={`relative flex w-full mt-4 ${
        role === "user" ? "justify-end pl-16" : "justify-start pr-16"
      }`}
    >
      {content && (
        <div
          className={`p-2 rounded-2xl text-[#000000aa] font-medium ${
            role === "user" ? "bg-purple-300" : "bg-purple-500"
          } ${content.includes(" ") ? "break-words" : "break-all"}`}
        >
          {role === "bot" || (role === "assistant" && message.animate) ? (
            <Typewriter
              options={{
                delay: 15,
                cursor: "",
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(content || "")
                  .callFunction(() => {
                    removeAnimation(index);
                    setLoading(false);
                    setIsTyping(false);
                  })
                  .start();
              }}
            />
          ) : (
            <>{content}</>
          )}
        </div>
      )}
      {content === null && (
        <div
          className={`p-2 rounded-2xl text-[#000000aa] font-medium ${
            role === "user" ? "bg-purple-300" : "bg-purple-500"
          }`}
        >
          <button
            className="group relative px-4 py-2 overflow-hidden rounded-2xl bg-white/10 text-sm md:text- font-bold text-white"
            onClick={() => {
              if (function_call)
                executeFunction(function_call.name, function_call.arguments);
            }}
          >
            <span className="flex gap-2 justify-center items-center">
              {function_call && t(`functions.${function_call.name}`)}
              <BsArrowRight size={20} />
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </div>
      )}
    </div>
  );
}

function useChatScroll(dep) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}
