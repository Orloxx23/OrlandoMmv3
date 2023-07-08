import { createLLMService } from "usellm";

export const runtime = "edge";

const llmService = createLLMService({
  openaiApiKey: process.env.OPENAI_API_KEY,
  actions: ["chat", "callAgentFunction"],
});

llmService.registerAgent("orlandoclon", {
  model: "gpt-3.5-turbo-0613",
  messages: [
    {
      role: "system",
      content: process.env.PERSONALITY,
    },
  ],
  functions: [
    {
      call: (options) => {
        return `${options.theme} mode activated!`;
      },
      schema: {
        name: "changeTheme",
        description: "change theme (dark/light)",
        parameters: {
          type: "object",
          properties: {
            theme: {
              type: "string",
              description: "The theme",
            },
          },
        },
      },
    },
    {
      call: (options) => {
        return `${options.language} changed!`;
      },
      schema: {
        name: "changeLanguage",
        description: "change language (en/es)",
        parameters: {
          type: "object",
          properties: {
            language: {
              type: "string",
              description: "The language",
            },
          },
        },
      },
    },
    {
      call: (options) => {
        return `Going to projects page!`;
      },
      schema: {
        name: "goToProjects",
        description: "go to projects page",
        parameters: {
          type: "object",
          properties: {
            project: {
              type: "string",
              description: "The project",
            },
          },
        },
      },
    },
  ],
});

export default async function POST(request) {
  const body = await request.json();

  try {
    const { result } = await llmService.handle({ body, request });
    return new Response(result, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: error?.status || 400 });
  }
}
