import styled from 'styled-components';

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const InputText = styled.input`
  padding: 8px 16px;
  color: var(--text);
  background: #fff;
  height: 56px;
  margin: 8px 0;
  border-radius: var(--border-card);
  transition: 0.3s;
  border: 1px solid var(--placeholder);
  &:focus {
    border: 1px solid #39f;
    outline: none !important;
  }
  &:hover {
    border: 1px solid #39f;
    box-shadow: 0 !important;
  }
`;

export const TextArea = styled.textarea`
  padding: 8px 16px;
  color: var(--text);
  background: #fff;
  border-radius: var(--border-card);
  transition: 0.3s;
  border: 1px solid var(--placeholder);
  &:focus {
    border: 1px solid #39f;
    outline: none !important;
  }
  &:hover {
    border: 1px solid #39f;
  }
`;
