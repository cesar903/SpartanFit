export const whatsappDisplay = "+55 11 97817-3675";
export const whatsappNumber = "5511978173675";

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Olá, quero agendar uma aula experimental na Spartan Fit.";

