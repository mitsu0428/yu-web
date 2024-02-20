import React, { useState } from "react";
import styled from "styled-components";

export const Component = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // ここでデータを送信する処理を追加する
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">名前:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">メールアドレス:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">お問い合わせ内容:</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">送信</Button>
      </form>
    </FormContainer>
  );
};

// memo: Headerの高さに合わせてTOPを調整する
const FormContainer = styled.div`
  width: calc(100% - 64px);
  margin-top: 32px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;

  box-shadow: 0 0 5px 0 #ccc;
  border: none;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 0 #007bff;
  }
  &:active {
    box-shadow: 0 0 5px 0 #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;

  box-shadow: 0 0 5px 0 #ccc;
  border: none;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 0 #007bff;
  }
  &:active {
    box-shadow: 0 0 5px 0 #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;
