import React, { useState, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

export type ToastTypes = "normal" | "error" | "";

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext<
  (props: { text: string; type?: ToastTypes; isDisplay?: boolean }) => void
>(
  {} as (props: { text: string; type?: ToastTypes; isDisplay?: boolean }) => {}
);

ToastContext.displayName = "ToastContext";

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [showable, setShowable] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState<ToastTypes>("normal");

  const showToast = ({
    text,
    type = "normal",
    isDisplay = true,
  }: {
    text: string;
    type?: ToastTypes;
    isDisplay?: boolean;
  }) => {
    setToastText(text);
    setToastType(type);

    if (isDisplay) {
      setShowable(true);
    }

    if (!isDisplay) {
      setShowable(false);
    }

    setTimeout(() => {
      setShowable(false);
    }, 3000);
  };

  useEffect(() => {
    if (showable) {
      const portalNode = document.createElement("div");
      document.body.appendChild(portalNode);
      return () => {
        document.body.removeChild(portalNode);
      };
    }
  }, [showable]);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {showable &&
        createPortal(
          <div
            className={`${
              toastType === "normal" ? "bg-blue-500" : "bg-red-500"
            } fixed bottom-4 right-4 text-white rounded-lg p-4 z-50`}
          >
            {toastText}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};
