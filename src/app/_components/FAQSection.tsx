import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import FAQItem from "./FAQItem";

const FAQSection = () => {

    const faqs = [
        {
            question: "¿Cuánto cuesta reparar un aire acondicionado?",
            answer: "El costo de reparación depende del tipo de avería y la marca del equipo. Ofrecemos presupuestos gratuitos sin compromiso."
        },
        {
            question: "¿Cuál es nuestro horario?",
            answer: "Trabajamos de lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 14:00. Disponemos de servicio de urgencias."
        },
        {
            question: "¿Reparáis todas las marcas?",
            answer: "Sí, trabajamos con todas las marcas principales del mercado y disponemos de repuestos originales."
        },
        {
            question: "¿En qué zonas de Valencia trabajáis?",
            answer: "Trabajamos en toda la provincia de Valencia y alrededores. Consulta disponibilidad para tu zona."
        },
        {
            question: "¿Cómo puedo pedir una cita o presupuesto?",
            answer: "Puedes contactarnos por teléfono, WhatsApp o email. Ofrecemos presupuestos gratuitos y sin compromiso."
        },
        {
            question: "¿Ofrecéis garantía en las reparaciones?",
            answer: "Sí, todas nuestras reparaciones incluyen garantía. El tiempo de garantía depende del tipo de reparación realizada."
        }
    ];

  return (
          <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">¿Qué servicios ofrecemos en Valencia?</h2>
          <div className="px-5 md:px-20 mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} color={index % 2 === 0 ? "bg-secondary-container" : "bg-on-secondary-blue"} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQSection