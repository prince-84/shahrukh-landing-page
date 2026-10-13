import React from "react";
import { JsonLd } from "./JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  faqs: FaqItem[];
}

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.replace(/^\d+[\.\)]\s*/, "").trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.trim(),
      },
    })),
  };

  return <JsonLd data={schema} />;
}
