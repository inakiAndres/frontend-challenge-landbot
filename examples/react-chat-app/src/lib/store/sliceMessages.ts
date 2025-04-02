import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, MessageListProps } from '../types/types';

const initialState: MessageListProps = {
  messages: {},
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
  },
});

export const { setMessages, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
