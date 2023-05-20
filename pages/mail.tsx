import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useToast } from "../components/hooks/useToast";

export default function Mail() {
  const [currentValues, setCurrentValues] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const toast = useToast();
  const router = useRouter();

  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sendMail = async () => {
    if (currentValues.name === "") {
      toast({
        text: "名前が入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (currentValues.mail === "") {
      toast({
        text: "メールアドレスが入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (currentValues.mail.indexOf("@") === -1) {
      toast({
        text: "無効なメールアドレスです。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (currentValues.message === "") {
      toast({
        text: "内容が入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    await _sleep(1000);
    await fetch("/api/mail", {
      method: "POST",
      body: `\n名前: ${currentValues.name} \nメールアドレス: ${currentValues.mail} \nお問い合わせ内容: \n${currentValues.message} `,
    });

    setCurrentValues({ name: "", mail: "", message: "" });
    toast({
      text: "メッセージを送信しました。",
      type: "normal",
      isDisplay: true,
    });
  };

  const hideToast = useCallback(() => {
    toast({ text: "", type: "", isDisplay: false });
  }, [toast]);

  useEffect(() => {
    const handleRouteChange = () => {
      hideToast();
    };

    const handleBeforeUnload = () => {
      hideToast();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [hideToast, router.events]);

  return (
    <div className="w-full max-w-800px mx-auto p-4">
      <div className="w-full max-w-800px mx-auto my-8 p-8 border border-white rounded-lg">
        <h2 className="relative py-6 pl-4 mb-0 text-2xl font-bold">
          お問い合わせ
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="名前"
            className="w-full border-b border-gray-300 bg-transparent mt-1 mb-4 focus:border-white outline-none"
            onChange={(e) =>
              setCurrentValues({ ...currentValues, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="メールアドレス"
            className="w-full border-b border-gray-300 bg-transparent mt-1 mb-4 focus:border-white outline-none"
            onChange={(e) =>
              setCurrentValues({ ...currentValues, mail: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="お問い合わせ&#13; 例）イベント会場として使用したいです。"
            className="w-full h-40 border-b border-gray-300 bg-transparent mt-1 mb-4 focus:border-white outline-none resize-none"
            onChange={(e) =>
              setCurrentValues({ ...currentValues, message: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={sendMail}
            className="inline-block w-full max-w-350px h-12 px-6 my-4 bg-gray-500 border-none rounded-md transition duration-400 cursor-pointer hover:bg-gray-600"
          >
            送信
          </button>
        </div>
      </div>
      <span className="text-base">
        <button className="inline-block">
          <Link href={"/"}>公式サイトに戻る</Link>
        </button>
      </span>
    </div>
  );
}
