import React from 'react';
import { IoMdSend } from "react-icons/io";

const Input = () => {
    return (
        <form className="input-container"  onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    );
};

export default Input;