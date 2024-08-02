
import "./ChatPage.css";
import NewPrompt from "../../components/newprompt/NewPrompt";
const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message"> Test Message from AI </div>
          <div className="message user">
            Test Message from Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Assumenda fugit illum natus accusamus voluptatum provident,
            magni facere pariatur dolores quam alias iure suscipit quis ipsum
            delectus obcaecati totam voluptates inventore?
          </div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from human</div>
          <div className="message">Test Message from AI</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
