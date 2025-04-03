import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, MessageListProps } from '../types/types';

const initialState: MessageListProps = {
  messages: {},
  revisitMessages: {}
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Record<string, ChatMessage>>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      const message = action.payload;
      state.messages[message.key] = message;
    },
    setRevisitMessages: (state, action: PayloadAction<ChatMessage>) => {
      const message = action.payload;
      state.revisitMessages["revisit"] = message;
    },
  },
});

export const { setMessages, addMessage, setRevisitMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
