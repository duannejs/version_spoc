  
import React from 'react';
import { Holder, InputText, TextArea } from './styles';

interface TextInputProps {
  placeholder?: string;
  textArea?: boolean;
  value: string;
  setChangeText: React.Dispatch<React.SetStateAction<string>>;
  maxLength?: number;
  type?: 'text' | 'password';
}

export const TextInput = ({
  placeholder,
  textArea,
  value,
  setChangeText,
  maxLength = 80,
  type = 'text'
}: TextInputProps) => {
  return (
    <Holder>
      {!textArea ? (
        <InputText
          placeholder={placeholder}
          value={value}
          onChange={(i) => setChangeText(i.target.value)}
          maxLength={maxLength}
          type={type}

        />
      ) : (
        <TextArea
          style={{ resize: 'none' }}
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={(i) => setChangeText(i.target.value)}
          maxLength={maxLength}
        />
      )}
    </Holder>
  );
};