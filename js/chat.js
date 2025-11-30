import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://xxsupernonox.app.n8n.cloud/webhook/13b73e86-5255-4e34-8082-204128a4cc4e/chat',
  webhookConfig: {
    method: 'POST',
    headers: {}
  },
  target: '#n8n-chat',
  mode: 'window',
  chatInputKey: 'chatInput',
  chatSessionKey: 'sessionId',
  loadPreviousSession: true,
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: 'en',
  initialMessages: [
    'Hola soy el Asistente de Antonio David',
    'Puedo explicarte algunas características de él'
  ],
  i18n: {
    en: {
      title: 'Asistente IA',
      getStarted: 'New Conversation',
      inputPlaceholder: 'Escribe tu pregunta...',
    },
  },
  enableStreaming: false,
});
