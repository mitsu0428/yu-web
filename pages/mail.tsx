/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";

export default function Mail() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sendMail = async () => {
    if (name === "") {
      alert("名前を入力してください。");
      return;
    }
    if (mail === "") {
      alert("メールアドレスを入力してください。");
      return;
    } else if (mail.indexOf("@") === -1) {
      alert("有効なメールアドレスを入力してください。");
      return;
    }
    if (message === "") {
      alert("内容を入力してください。");
      return;
    }

    await _sleep(1000);

    alert("お問い合わせを送信しました。");

    await fetch("/api/mail", {
      method: "POST",
      body: `
        名前: ${name}
        メールアドレス: ${mail}
        お問い合わせ内容: ${message}
      `,
    });

    location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-96">
        <h1 className="text-6xl font-bold">お問い合わせ</h1>
        <div className="flex flex-col items-start mt-8">
          <label
            className="text-2xl font-bold"
            htmlFor="name"
          >
            名前
          </label>
          <input
            className="w-full h-10 px-3 mt-2 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="name"
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mt-8">
          <label
            className="text-2xl font-bold"
            htmlFor="email"
          >
            メールアドレス
          </label>
          <input
            className="w-full h-10 px-3 mt-2 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="email"
            type="email"
            placeholder="メールアドレス"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mt-8">
          <label
            className="text-2xl font-bold"
            htmlFor="message"
          >
            お問い合わせ内容
          </label>
          <textarea
            className="w-full h-40 px-3 mt-2 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="message"
            placeholder="お問い合わせ内容"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <button
            className="w-full h-10 px-3 text-base text-white bg-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={sendMail}
          >
            送信
          </button>
        </div>
        <div className="mt-8">
          <Link href="/">ホームに戻る</Link>
        </div>
      </div>
    </div>
  );
}
