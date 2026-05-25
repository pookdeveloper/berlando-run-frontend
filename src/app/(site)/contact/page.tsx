"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SHOW_OTHER_CONTACT_WAYS } from "@/lib/config";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Contact Us
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            Let's talk
          </p>
          <p className="mt-6 text-lg text-foreground/70">
            Have a question about our products, shipping, or community events?
            We're here to help.
          </p>

          <div className="mt-16">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
                  placeholder="Your message..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-none border border-primary bg-primary px-8 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {SHOW_OTHER_CONTACT_WAYS && (
            <div className="mt-16 border-t border-border pt-16">
              <h2 className="text-2xl font-light text-foreground">
                Other Ways to Reach Us
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </h3>
                  <p className="mt-2 text-lg text-foreground/70">
                    hello@belando.run
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Customer Service
                  </h3>
                  <p className="mt-2 text-lg text-foreground/70">
                    Available Monday - Friday, 9:00 - 18:00 CET
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Social
                  </h3>
                  <div className="mt-2 flex gap-4">
                    <a
                      href="#"
                      className="text-lg text-foreground/70 hover:text-foreground"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-lg text-foreground/70 hover:text-foreground"
                    >
                      Strava
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background border border-border p-8 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <Dialog.Close className="absolute right-4 top-4 text-foreground/40 hover:text-foreground transition-colors">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Dialog.Close>

            <Dialog.Title className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Message sent
            </Dialog.Title>
            <Dialog.Description className="mt-4 text-2xl font-light text-foreground leading-snug">
              Thanks for reaching out. We'll get back to you soon.
            </Dialog.Description>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center border border-foreground/20 px-8 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Close
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
