import React, { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const NewPrompt = ({data}) => {
 console.log(data._id)
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });
  const chat = model.startChat({
    history: data?.history.map(({ role, parts }) => ({
        role: role,
        parts: parts.map(part => ({ text: part.text })),
    })),
    generationConfig: {
      // maxOutputTokens: 100,
    },
});
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  }, [question, answer, img.dbData]);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      return  await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.length ? question : undefined,
          answer,
          img: img.dbData?.filePath || undefined,
        }),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ["chats", data._id] })
        .then(() => {
          setQuestion("");
          setAnswer("");
          setImg({
            isLoading: false,
            error: "",
            dbData: {},
            aiData: {},
          });
        });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const add = async (text,isInitial) => {
    if(!isInitial)setQuestion(text);
    try{
    const result = await chat.sendMessageStream(
      Object.entries(img.aiData).length ? [img.aiData, text] : [text]
    );
    let accumulatedText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      accumulatedText += chunkText;
      setAnswer(accumulatedText);
    }
    mutation.mutate()
  }
  catch(err){
    console.log(err)
  }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    console.log(text);
    if (!text) return;
    add(text,false);
  };
  const hasRun=useRef(false)
  useEffect(()=>{
    if(hasRun.current){
    if(data?.history?.length===1){
      add(data.history[0].parts[0].text,true)
    }
  }
  hasRun.current=true
  },[])
  return (
    <>
      {/* ADD NEW CHAT */}
      {img.isLoading && <div>loading..</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          transformation={[{ width: 380 }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      {/* <button onClick={add}>TEST API</button> */}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask me anything" />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
