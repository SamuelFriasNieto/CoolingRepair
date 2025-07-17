import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import React from "react";

interface FAQItemProps {
  question: string; 
  answer: string;
  color?: string; // Optional prop for custom color
}

const FAQItem = ({ question, answer, color }: FAQItemProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger
        className={`flex justify-between items-center w-full p-4 ${
          color || "bg-secondary-container"
        } rounded-lg shadow-sm hover:shadow-md transition-shadow`}
      >
        <span className="font-medium text-on-secondary-container">
          {question}
        </span>
        <ChevronDown className="w-5 h-5 text-on-secondary-container" />
      </CollapsibleTrigger>
      <CollapsibleContent className={`p-4 ${color || "bg-white"} mt-1 rounded-lg shadow-sm`}>
        <p className="text-gray-600">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FAQItem;
