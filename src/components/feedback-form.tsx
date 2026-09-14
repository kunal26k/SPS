"use client";

import { useState, type FormEvent } from "react";

const roles = ["Parent / Guardian", "Current Student", "Alumnus / Alumna", "Staff Member", "Prospective Family", "Other"];
const topics = [
  "Academics & Curriculum",
  "Admissions Process",
  "Facilities & Hostel",
  "Transport",
  "Co-curricular & Sports",
  "A compliment",
  "Something else",
];

export function FeedbackForm() {
  const [rating, setRating] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  // No backend yet: mirror the design, which confirms and resets locally.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setRating(null);
    e.currentTarget.reset();
  }

  return (
    <form className="fb-form" onSubmit={onSubmit}>
      <div className="fb-row">
        <div className="fb-field">
          <label htmlFor="fbName">Your name</label>
          <input id="fbName" name="name" type="text" required placeholder="As you'd like us to address you" />
        </div>
        <div className="fb-field">
          <label htmlFor="fbRole">You are a</label>
          <select id="fbRole" name="role" required defaultValue="">
            <option value="">Select…</option>
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="fb-row">
        <div className="fb-field">
          <label htmlFor="fbEmail">Email</label>
          <input id="fbEmail" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="fb-field">
          <label htmlFor="fbTopic">Topic</label>
          <select id="fbTopic" name="topic" required defaultValue="">
            <option value="">Select a topic…</option>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="fb-field" role="group" aria-labelledby="fbRateLabel">
        <span className="fb-label" id="fbRateLabel">
          Overall, how would you rate your experience?
        </span>
        <div className="fb-rate">
          {[1, 2, 3, 4, 5].map((v) => (
            <button
              key={v}
              type="button"
              className={rating === v ? "active" : undefined}
              aria-pressed={rating === v}
              onClick={() => setRating(v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="fb-field">
        <label htmlFor="fbMsg">Your message</label>
        <textarea
          id="fbMsg"
          name="message"
          required
          placeholder="Be as specific as you'd like — names, dates, what worked, what didn't."
        />
      </div>

      <button type="submit" className="fb-submit">
        Send feedback
      </button>
      {sent && (
        <div className="fb-thanks" role="status">
          Thank you — your message is on its way to the Principal&apos;s office. You&apos;ll hear from us within five
          working days.
        </div>
      )}
    </form>
  );
}
