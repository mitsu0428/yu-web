/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";

export default function Mail() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  // 指定秒を待機する関数
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  // メール送信関数
  const sendMail = async () => {
    // 名前が入力されているか
    if (name == "") {
      alert("名前を入力してください！");
      return;
    }
    // メールアドレスが入力されているかと正しいフォーマットか
    if (mail == "") {
      alert("メールアドレスを入力してください。");
      return;
    } else if (mail.indexOf("@") == -1) {
      alert("有効なメールアドレスを入力してください。");
      return;
    }
    // 内容が入力されているか
    if (message == "") {
      alert("内容を入力してください。");
      return;
    }
    await _sleep(1000);
    alert("お問い合わせを送信しました。");
    await fetch("/api/mail", {
      method: "POST",
      body: `\n
      名前: ${name} \n
      メールアドレス: ${mail} \n
      お問い合わせ内容: ${message} `,
    });
    // 値は保持されているのでリロードしてOK
    location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">お問い合わせ</h1>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h2 className="text-2xl font-bold">名前</h2>
            <input
              className="w-1/2 h-10 px-3 mb-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              placeholder="名前"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h2 className="text-2xl font-bold">メールアドレス</h2>
            <input
              className="w-1/2 h-10 px-3 mb-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              placeholder="メールアドレス"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h2 className="text-2xl font-bold">お問い合わせ内容</h2>
            <textarea
              className="w-1/2 h-40 px-3 mb-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              placeholder="お問い合わせ内容"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <button
              className="w-1/2 h-10 px-3 mb-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              onClick={sendMail}
            >
              送信
            </button>
          </div>
        </div>
        <Link href="/">ホームに戻る</Link>
      </div>
    </div>
  );
}
