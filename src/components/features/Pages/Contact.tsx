/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Link from "next/link";
import styled from "styled-components";

import router from "next/router";
import YuWebLoading from "@/components/features/Loading/YuWebLoading";
import font from "@/components/Tsumugi/Font/NextFont";

export default function Mail() {
  const [currentValues, setCurentValues] = React.useState({
    name: "",
    mail: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(true);

  const sendMail = async () => {
    if (currentValues.name == "") {
      return;
    }

    if (currentValues.mail == "") {
      return;
    }

    if (currentValues.mail.indexOf("@") == -1) {
      return;
    }

    if (currentValues.message == "") {
      return;
    }

    await fetch("/api/mail", {
      method: "POST",
      body: `\n
      名前: ${currentValues.name} \n
      メールアドレス: ${currentValues.mail} \n
      お問い合わせ内容: \n${currentValues.message} `,
    });

    setCurentValues({ name: "", mail: "", message: "" });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <YuWebLoading text="Our recent trajectories." />;
  }

  return (
    <BasicContainer className={font.khand_400.className}>
      <ContactContainer>
        <BasicSubContainer>
          <ContactSubTitle>お問い合わせ</ContactSubTitle>
        </BasicSubContainer>
        <BasicSubContainer>
          <Text>YourName*</Text>
          <BasicInputField
            type="text"
            value={currentValues.name ?? ""}
            onChange={(e: { target: { value: any } }) => {
              setCurentValues({ ...currentValues, name: e.target.value });
            }}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <Text>E-mail Address*</Text>
          <BasicInputField
            type="text"
            value={currentValues.mail ?? ""}
            onChange={(e: { target: { value: any } }) => {
              setCurentValues({ ...currentValues, mail: e.target.value });
            }}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <Text>Message*</Text>
          <ContactTextArea
            value={currentValues.message ?? ""}
            onChange={(e: { target: { value: any } }) => {
              setCurentValues({ ...currentValues, message: e.target.value });
            }}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicButton
            type="button"
            onClick={() => {
              sendMail();
            }}
          >
            送信
          </BasicButton>
        </BasicSubContainer>
      </ContactContainer>
      <Text>
        <BasicButton>
          <Link href={"/"}>公式サイトに戻る</Link>
        </BasicButton>
      </Text>
    </BasicContainer>
  );
}

const BasicContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 16px;
`;

const BasicSubContainer = styled(BasicContainer)``;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
`;

const ContactSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;
  margin: 0;
  font-size: 2rem;
  color: #000000;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 18px;
  color: #000000;
`;

const BasicInputField = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  transition: border-bottom-color 0.3s;
  color: #000000;
  background-color: transparent;
  :focus {
    border-bottom-color: #000000;
    outline: none;
  }
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 6px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #000000;
  background-color: transparent;
  resize: none;
  transition: border-bottom-color 0.3s;
  color: #000000;
  :focus {
    border-bottom-color: #000000;
    outline: none;
  }
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 3rem;
  font-size: 18px;
  padding: 0.5rem 1.5rem;
  margin: 1rem 0;
  text-decoration: none;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #cc5757;
  }
`;
