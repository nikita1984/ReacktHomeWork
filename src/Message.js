import './App.css';

const Message = (props) => {
return <div>Message from <span className="spanText">{props.name}</span>: {props.message}</div>;
};

export default Message;     