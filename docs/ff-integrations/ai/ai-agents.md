---
slug: /integrations/ai-agents
title: AI Agents
description: Learn how to add an AI Agent in your FlutterFlow app.
tags: [AI, Gemini, Integration]
sidebar_position: 1
keywords: [FlutterFlow, AI, Gemini, Integration, OpenAI, Anthropic, Agent Builder]
---

# AI Agents

AI Agents in FlutterFlow enable you to integrate AI-powered interactions using advanced LLMs (Large Language Models) directly into your app. An AI Agent is essentially a configurable chatbot or AI-powered service defined and managed within FlutterFlow.

By selecting a provider (Google, OpenAI, or Anthropic), choosing the model (e.g., GPT-4, Claude, Gemini), and specifying system instructions and preloaded messages, you can create an agent to handle user input in a context-aware way.

Here are some examples of AI Agents:

- **AI Stylist:** In an e-commerce fashion app, an AI agent analyzes photos of clothing items users upload from their wardrobes and provides styling tips based on color combinations, styles, seasons, and individual preferences.
- **Smart Recipe Assistant:** An AI agent in a cooking app that suggests recipes based on ingredients users have, dietary restrictions, or meal preferences, and offers interactive cooking guidance.
- **AI Tutor or Educator:** A conversational agent within educational apps that helps users learn complex topics, providing step-by-step explanations, answering follow-up questions, or adapting content to the learner’s pace.

:::info[Prerequisite]
Before you begin setting up AI Agents, make sure you:
1. Connect your project to Firebase by completing the [**Firebase Setup**](../firebase/connect-to-firebase-setup.md).
2. Upgrade your Firebase project to the [**Blaze Plan**](https://firebase.google.com/pricing), as we rely on [**Firebase Cloud Functions**](https://firebase.google.com/docs/functions) to handle AI-related communication securely.
:::

## Create AI Agent

To create an AI agent, select the **Agents** tab from the left-side navigation menu, then click the **(+)** button. Provide a descriptive **Agent Name** (e.g., "ShoppingAssistant") and click **Create**.

:::info

You can create one AI Agent on the Standard plan and unlimited AI Agents on the Pro & Teams plans.

:::

After creating the agent, configure it using the following options:

#### Model Prompt

- **Description**: A brief explanation of what the AI agent does. Note that it is not sent to any AI models.
- **System Message**: Defines the AI’s role and how it should behave when responding to users. For instance, “You are an AI fashion stylist…” tells the agent to respond like a professional stylist, focusing on outfits, colors, and suggested combinations.

#### Preloaded Messages

Preloaded messages allow you to set predefined interactions between the AI and users. It is useful for training the agent with example responses to ensure it understands the expected format of answers.

- **Role**: Specifies whether the message is from the **User** or the **Assistant**.
- **Message**: The actual text input that either the user or assistant might send.
- **Example:**
    - **Role = User:** "What outfit suits my medium skin tone for a sunny day?"
    - **Role = Assistant:** "For your medium skin tone on a sunny day, a pastel-colored top with white chinos would look fantastic! Consider adding sunglasses and comfortable footwear."

:::tip

It is always recommended to include at least one sample conversation with both a user message and an assistant response.

:::

#### Model Settings

- **Provider**: Allows you to select the AI vendor for this agent. Currently, we support **OpenAI**, **Google,** and **Anthropic**.
    - **OpenAI & Anthropic**: If you choose OpenAI or Anthropic, FlutterFlow will create a [Cloud Function](https://firebase.google.com/docs/functions) in Firebase to relay requests to the AI API securely. Hence, your Firebase project must be on a [Blaze](https://firebase.google.com/pricing) plan (paid) to deploy the necessary cloud function. **Note that** the deployed cloud function will only be accessible to authenticated users.
    - **Google**: When selecting Google as your provider, you need to enable the following in your Firebase project.
        - [**Firebase Authentication**](../authentication/firebase-auth/auth-initial-setup.md): This ensures secure interactions between users and your AI agents.
        - [**Vertex AI**](https://firebase.google.com/docs/vertex-ai): Vertex AI is Google's comprehensive AI platform used to manage and deploy machine learning models. FlutterFlow internally uses the [`firebase_vertexai`](https://pub.dev/packages/firebase_vertexai) package to integrate Google's AI models within your Firebase-connected project.
- **Model**: Choose from the list of available models for the given provider. Models differ in capabilities, supported parameters, and cost structure.
- **API Key:** Enter your provider’s API key here when using **OpenAI** or **Anthropic**. FlutterFlow securely stores this key within the deployed cloud function to ensure it remains hidden from end-users and network requests. If you're using **Google,** you won't see the API Key field, as authentication is managed through Vertex AI in your Firebase project.

:::tip

You can obtain your OpenAI API key from [**OpenAI API Keys**](https://platform.openai.com/api-keys) page and your Anthropic API key from [**Anthropic Console**](https://console.anthropic.com/settings/keys).

:::

#### Request Options

Define the types of inputs users can send to the AI agent. You can enable one or more of the following options:

- **Text**: Allows users to send written messages, questions, or prompts.
- **Image**: Enables users to upload photos for the AI to analyze visual content, such as objects, styles, or scenes.
- **PDF** (Anthropic and Google Agent only): Lets users submit PDF documents, allowing the AI to extract and interpret information from files like resumes, reports, or forms.
- **Audio** (Google Agent only): Supports voice input, enabling users to record or upload audio clips for transcription, sentiment analysis, or voice-based commands.
- **Video** (Google Agent only): Allows users to submit video files, enabling the AI to analyze visual elements.

Selecting multiple input types makes it easier for users to clearly communicate what they need. Instead of relying only on text descriptions, users can combine inputs. For instance, in an AI Stylist agent, enabling both Text and Image allows users to either describe their outfits in words or upload clothing photos for personalized analysis.

#### Response Options

Defines the type of output you want from the agent. You can select from the following options:

- **Text**: Returns plain text responses.
- **Markdown**: Allows richer formatting (headings, lists, links) if you display content as markdown. For example, An FAQ chatbot that uses formatted bullet points, and bold or italic text to highlight key info.
- **JSON**: Returns structured data, which can be parsed programmatically. For example, a restaurant finder app might need structured data, e.g., `{ name: 'Pizza Palace', distance: '2.4 miles' }` to display a dynamic map.

#### Model Parameters

Here, you can fine-tune how the agent generates responses.

- **Temperature**: Controls how creative or random the AI’s responses can be on a scale of 0 to 1. A lower value (e.g., 0.1) makes responses more factual and consistent. A higher value (e.g., 1.0) makes responses more creative and varied (e.g., brainstorming ideas).
- **Max Tokens**: Limits the total number of tokens used, including both the user's request and the agent's response. Adjusting this helps manage costs and ensures concise interactions.
- **Top P**: Another technique for controlling the variety of words the AI considers. Typically kept at default unless you want fine-tuned sampling control.

For example, in a **Blog-Writing Assistant**, you might set a moderate to high temperature for creative phrasing and a high max tokens limit for detailed paragraphs. Conversely, a **Financial Chatbot** would benefit from a lower temperature to deliver consistent, accurate, and stable responses without unnecessary creativity.

#### Deployment Settings

Here, you can fine-tune how your AI Agent is executed. These settings help balance performance, security, and cost for your use case.

- **Require Authentication**: By default, this is ON to restrict access to only authenticated Firebase users. When OFF, anyone can call your agent, which may pose a security risk.
- **Timeout (seconds)**: Defines how long the agent function can run before being terminated. For example, a value of `60` allows the function up to 60 seconds to complete. Increase if your agent performs long-running operations or processes complex logic.
- **Memory**: Allocates memory for your agent. Higher memory improves performance for heavy workloads but may cost more. For example, choose `256MB` for standard tasks or `512MB+` for agents handling large data or complex logic.
- **Min Instances**: The number of instances kept warm and ready at all times. Set to `0` to minimize costs. For example, setting `Min Instances` > 0 can improve response speed by avoiding cold starts, but this incurs additional cost. Set to `0` for development or low-traffic environments.
- **Max Instances**: The maximum number of instances that can run simultaneously. Helps scale under load and avoid throttling. For example, setting `Max Instances = 10` limits concurrency to 10 requests.

Once configured, click the **Publish** button to make it live.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Vi9UpfINWa0V6uXZG0v2?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

:::info[For non Google Agents]

After you successfully deploy the agent, any changes made to its configuration—such as modifying the system message, model, or temperature will require you to redeploy the Agent. For Google agents, the configuration is stored at client-side, so redeployment isn't necessary.
:::

Now you can use the AI agent in your FlutterFlow app logic using the following actions.

## Send Message [Action]

The **Send Message** action allows your app to pass user input (such as text or images) to a selected AI Agent and receive a response. For example, you can add this action when a user taps a “Send” button after typing in a text field. The AI Agent can then reply based on its system instructions, preloaded messages, and model settings.

You can configure the following options for this action:

- **Select Agent**: Here, you select the specific AI Agent you previously configured.
- **Conversation ID**: The Conversation ID is a unique identifier you assign to maintain context and continuity across multiple interactions within the same conversation. Using a consistent ID (e.g., `user123_AIStylist_202503181200`) allows the AI to remember past interactions and keep conversations coherent and contextual.
- **Text Input**: This is where you specify the user's message or input text that the AI agent will process. Typically, this input comes from a widget state (e.g., TextField).
- **Image Input**: If your agent supports image processing, you can provide an image.
- **Audio Input**: If your agent supports audio processing, you can pass audio files.
- **Video Input**: If your agent can analyze video content, provide a video file.

:::info
 - You can send media files either from [**network URL**](../../ff-concepts/file-handling/displaying-media.md#network) or a [**local device**](../../ff-concepts/file-handling/displaying-media.md#uploaded-file) storage.
 - For non-Google agents, we only support network URLs for now. To pass media files from your device, [**upload it first to cloud storage**](../../ff-concepts/file-handling/uploading-files.md#upload-or-save-media-action) and then provide its generated URL.
 :::

- **Action Output Variable Name**: This field stores the AI agent's response to let you display the response to users or process it further.

![ai-agent-send-message-action.avif](imgs/ai-agent-send-message-action.avif)

## Clear Chat History [Action]

The **Clear Chat History** action allows you to clear the remembered context. It takes the **Conversation ID** and stops referencing the existing thread ID when you next send a message. For example, you can add this action on the refresh button inside the chat to manually reset a conversation and start a fresh one with a new context.

![ai-agent-reset-action.avif](imgs/ai-agent-reset-action.avif)