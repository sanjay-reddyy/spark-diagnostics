import { knowledgeBase } from "../constants/chatbotKnowledge";

export function getBotReply(message: string, language: "en" | "kn" = "en"): string {
  const lowerMessage = message.toLowerCase();

  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      if (lowerMessage.includes(keyword)) {
        return item.reply[language];
      }
    }
  }

  const defaultReplies = {
    en: "Please visit Spark Diagnostics or contact our team for detailed assistance.",
    kn: "ವಿವರವಾದ ಸಹಾಯಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ಸ್ಪಾರ್ಕ್ ಡಯಾಗ್ನಾಸ್ಟಿಕ್ಸ್ ಭೇಟಿ ಮಾಡಿ ಅಥವಾ ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  };

  return defaultReplies[language];
}
