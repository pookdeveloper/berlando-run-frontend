"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

type NewsletterFormEvent = React.BaseSyntheticEvent;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmit = async (event: NewsletterFormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message ?? "Unable to subscribe right now.");
        return;
      }

      setStatus("success");
      setMessage(result.message ?? "Subscribed successfully.");
      setEmail("");
      setOpen(true);
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        required
      />
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {message ? (
        <p style={{ width: "100%", marginTop: "0.65rem", color: status === "error" ? "#f2a2a2" : "#b8d9b6" }}>
          {message}
        </p>
      ) : null}

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 40
            }}
          />
          <Dialog.Content
            className="card"
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(92vw, 420px)",
              zIndex: 50,
              borderRadius: "0.3rem"
            }}
          >
            <Dialog.Title style={{ margin: 0 }}>You are in.</Dialog.Title>
            <Dialog.Description style={{ color: "#d0d6cf" }}>
              Welcome to BERLANDO RUN. Your subscription is confirmed.
            </Dialog.Description>
            <Dialog.Close className="btn btn-primary">Continue</Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </form>
  );
}
