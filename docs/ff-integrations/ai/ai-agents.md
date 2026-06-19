---
slug: /integrations/ai-agents
title: AI Agents
description: Learn how to add AI Agents for chat, image generation, video generation, text-to-speech, and speech-to-text in your FlutterFlow app.
tags: [AI, Gemini, OpenAI, ElevenLabs, Integration]
sidebar_position: 1
keywords: [FlutterFlow, AI, Gemini, Integration, OpenAI, Anthropic, ElevenLabs, Agent Builder, image generation, video generation, text-to-speech, speech-to-text]
---

# AI Agents

AI Agents in FlutterFlow enable you to integrate AI-powered chat, image generation, video generation, text-to-speech, and speech-to-text directly into your app. An AI Agent is a configurable AI service that you define in FlutterFlow and then call from your app actions.

You can build agents powered by providers such as **OpenAI**, **Google**, **Anthropic**, and **ElevenLabs**. Depending on the agent kind, you can create a conversational assistant, convert text into speech, transcribe audio into text, generate images from prompts, or generate video using the latest supported models.

Here are some examples of AI Agents:

- **AI Stylist:** In an e-commerce fashion app, an AI agent analyzes photos of clothing items users upload from their wardrobes and provides styling tips based on color combinations, styles, seasons, and individual preferences.
- **Smart Recipe Assistant:** An AI agent in a cooking app that suggests recipes based on ingredients users have, dietary restrictions, or meal preferences, and offers interactive cooking guidance.
- **Marketing Image Generator:** An image generation agent that creates product thumbnails, social posts, or campaign visuals from a prompt.
- **Language Learning App:** A text-to-speech agent reads practice sentences aloud so learners can hear pronunciation in a natural voice.
- **Meeting Notes App:** A speech-to-text agent transcribes uploaded meeting recordings or voice notes into searchable text.
- **Social Media Campaign Builder:** A video generation agent creates short promotional clips from prompts for product launches, announcements, or ads.

:::info[Prerequisite]
Before you begin setting up AI Agents, make sure you:
1. Complete all the steps in [**Firebase Setup**](../firebase/connect-to-firebase-setup.md). Note that, while setting up, make sure to follow step number 5 and 8 carefully from [**Allow FlutterFlow to Access Your Project**](../firebase/connect-to-firebase-setup.md#allow-flutterflow-to-access-your-project) section to properly add the **Cloud Functions Admin** role to **firebase@flutterflow.io** user.
2. Upgrade your Firebase project to the [**Blaze Plan**](https://firebase.google.com/pricing), as we rely on [**Firebase Cloud Functions**](https://firebase.google.com/docs/functions) to handle AI-related communication securely.
3. Get an API key for the provider you want to use, such as [**OpenAI**](https://platform.openai.com/api-keys), [**Anthropic**](https://platform.claude.com/settings/keys), [**Google AI Studio**](https://aistudio.google.com/app/apikey), or [**ElevenLabs**](https://elevenlabs.io/docs/api-reference/authentication).
:::

## Create AI Agent

To create an AI agent, select the **Agents** tab from the left-side navigation menu, then click the **(+)** button. Provide a descriptive **Agent Name** (e.g., "ShoppingAssistant") and click **Create**.

:::info

You can create one AI Agent on the Basic plan and unlimited AI Agents on the Growth plan and higher.

:::

After creating the agent, start with the common agent settings:

- **Agent Kind**: Select what the agent should do. Supported kinds include **Chat**, **Image Generation**, **Text-to-Speech**, **Speech-to-Text**, and **Video Generation**.
- **Internal Description**: Add a short note describing what the agent is for. This is for your own reference and is not sent to the AI model.


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

:::note
The selected agent kind determines which model settings and app actions are available. For example, a **Chat** agent is used with the **Send Message** action, while an **Image Generation** agent is used with the **Generate Image** action.
:::

## Chat

Use a **Chat** agent when your app needs a conversational assistant that can respond to users with text, markdown, or structured JSON. Chat agents are useful for support bots, tutors, product recommenders, content assistants, and agents that analyze user-provided text, images, PDFs, audio, or video.

The chat settings are as follows:

**System Message**

Defines the AI’s role and how it should behave when responding to users. For instance, “You are an AI fashion stylist…” tells the agent to respond like a professional stylist, focusing on outfits, colors, and suggested combinations.

**Preloaded Messages**

Preloaded messages allow you to set predefined interactions between the AI and users. It is useful for training the agent with example responses to ensure it understands the expected format of answers.

- **Role**: Specifies whether the message is from the **User** or the **Assistant**.
- **Message**: The actual text input that either the user or assistant might send.
- **Example:**
    - **Role = User:** "What outfit suits my medium skin tone for a sunny day?"
    - **Role = Assistant:** "For your medium skin tone on a sunny day, a pastel-colored top with white chinos would look fantastic! Consider adding sunglasses and comfortable footwear."

:::tip

It is always recommended to include at least one sample conversation with both a user message and an assistant response.

:::

**Model Settings**

- **Provider**: Allows you to select the AI vendor for this agent. Supported chat providers include **OpenAI**, **Google**, and **Anthropic**.
    - **OpenAI & Anthropic**: If you choose OpenAI or Anthropic, FlutterFlow will create a [Cloud Function](https://firebase.google.com/docs/functions) in Firebase to relay requests to the AI API securely. Hence, your Firebase project must be on a [Blaze](https://firebase.google.com/pricing) plan (paid) to deploy the necessary cloud function. **Note that** the deployed cloud function will only be accessible to authenticated users.
    - **Google**: When selecting Google as your provider for chat agents, you need to enable the following in your Firebase project.
        - [**Firebase Authentication**](../authentication/firebase-auth/auth-initial-setup.md): This ensures secure interactions between users and your AI agents.
        - [**Vertex AI**](https://firebase.google.com/docs/vertex-ai): Vertex AI is Google's comprehensive AI platform used to manage and deploy machine learning models. FlutterFlow internally uses the [`firebase_vertexai`](https://pub.dev/packages/firebase_vertexai) package to integrate Google's AI models within your Firebase-connected project.
- **Model**: Choose from the list of available models for the given provider. Models differ in capabilities, supported parameters, and cost structure.
- **API Key:** Enter your provider’s API key when the selected provider or model requires one. FlutterFlow securely stores this key within the deployed cloud function to ensure it remains hidden from end-users and network requests.


**Request Options**

Define the types of inputs users can send to the AI agent. You can enable one or more of the following options:

- **Text**: Allows users to send written messages, questions, or prompts.
- **Image**: Enables users to upload photos for the AI to analyze visual content, such as objects, styles, or scenes.
- **PDF** (Anthropic and Google Agent only): Lets users submit PDF documents, allowing the AI to extract and interpret information from files like resumes, reports, or forms.
- **Audio** (Google Agent only): Supports voice input, enabling users to record or upload audio clips for transcription, sentiment analysis, or voice-based commands.
- **Video** (Google Agent only): Allows users to submit video files, enabling the AI to analyze visual elements.

Selecting multiple input types makes it easier for users to clearly communicate what they need. Instead of relying only on text descriptions, users can combine inputs. For instance, in an AI Stylist agent, enabling both Text and Image allows users to either describe their outfits in words or upload clothing photos for personalized analysis.

**Response Options**

Defines the type of output you want from the agent. You can select from the following options:

- **Text**: Returns plain text responses.
- **Markdown**: Allows richer formatting (headings, lists, links) if you display content as markdown. For example, an FAQ chatbot can use formatted bullet points, bold text, or italic text to highlight key information.
- **JSON**: Returns structured data, which can be parsed programmatically. For example, a restaurant finder app might need structured data, e.g., `{ name: 'Pizza Palace', distance: '2.4 miles' }` to display a dynamic map.

**Model Parameters**

Here, you can fine-tune how the agent generates responses.

- **Temperature**: Controls how creative or random the AI’s responses can be on a scale of 0 to 1. A lower value (e.g., 0.1) makes responses more factual and consistent. A higher value (e.g., 1.0) makes responses more creative and varied (e.g., brainstorming ideas).
- **Max Tokens**: Limits the total number of tokens used, including both the user's request and the agent's response. Adjusting this helps manage costs and ensures concise interactions.
- **Top P**: Another technique for controlling the variety of words the AI considers. Typically kept at default unless you want fine-tuned sampling control.

For example, in a **Blog-Writing Assistant**, you might set a moderate to high temperature for creative phrasing and a high max tokens limit for detailed paragraphs. Conversely, a **Financial Chatbot** would benefit from a lower temperature to deliver consistent, accurate, and stable responses without unnecessary creativity.

### Send Message [Action]

The **Send Message** action allows your app to pass user input (such as text or images) to a selected AI Agent and receive a response based on its system instructions, preloaded messages, and model settings. For example, you can add this action when a user taps a “Send” button after typing in a text field. The AI Agent can then reply based on its system instructions, preloaded messages, and model settings.

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

### Clear Chat History [Action]

The **Clear Chat History** action allows you to clear the remembered context for a Chat agent. It takes the **Conversation ID** and stops referencing the existing thread ID when you next send a message.

![ai-agent-reset-action.avif](imgs/ai-agent-reset-action.avif)

## Text-to-Speech

Use a **Text-to-Speech** agent when your app needs to convert text into spoken audio. This is useful for reading messages aloud, generating narration, creating voiceovers, or helping users hear content in a selected voice.

Text-to-speech settings include:

- **Provider**: The text-to-speech provider, such as ElevenLabs.
- **Model**: The speech generation model, such as Eleven Flash v2.5.
- **API Key**: The provider API key used by the deployed agent function.
- **Voice ID**: The default voice used to generate speech. Actions can override this per call.
- **Output Format**: The audio output format, such as MP3.
- **Stability**: Controls how consistent the voice output should be.
- **Similarity Boost**: Controls how closely the generated speech should match the selected voice.
- **Speed**: Controls the speaking speed.

![AI Agent text-to-speech settings](imgs/ai-agent-tts.avif)

### Generate Speech [Action]

The **Generate Speech** action allows your app to send text to a Text-to-Speech agent and receive generated audio. You can configure the following options for this action:

- **Select TTS Agent**: Select the Text-to-Speech agent you previously configured.
- **Text Input**: The text to convert into speech.
- **Voice ID Override (optional)**: Optionally override the agent's default voice ID for this call.
- **Action Output Variable Name**: Stores the generated speech result so you can play it or use it in later actions.

![AI Agent generate speech action](imgs/ai-agent-tts-action.avif)

## Speech-to-Text

Use a **Speech-to-Text** agent when your app needs to convert audio into text. This is useful for transcribing voice notes, meeting recordings, support messages, uploaded audio files, or audio from a URL.

Speech-to-text settings include:

- **Provider**: The transcription provider, such as ElevenLabs.
- **Model**: The transcription model, such as Scribe v2.
- **API Key**: The provider API key used by the deployed agent function.

![AI Agent speech-to-text settings](imgs/ai-agent-stt.avif)

### Transcribe Audio [Action]

The **Transcribe Audio** action allows your app to send audio to a Speech-to-Text agent and receive the transcribed text. You can configure the following options for this action:

- **Select STT Agent**: Select the Speech-to-Text agent you previously configured.
- **Audio Source**: Choose where the audio comes from. Supported sources include **Audio URL** and **Uploaded Audio File**.
- **Language Code (optional)**: Provide a language code, such as `en`, to guide transcription.
- **Action Output Variable Name**: Stores the transcribed text so you can display it or use it in later actions.

![AI Agent transcribe audio action](imgs/ai-agent-stt-action.avif)


## Image Generation

Use an **Image Generation** agent when your app needs to create images from a text prompt. This is useful for generating product thumbnails, profile artwork, backgrounds, campaign visuals, or other app-specific images.

You can configure image generation with supported providers such as **Google** or **OpenAI**, choose the model, add the API key, and set a default image size.

Image settings include:

- **Provider**: The provider used to generate images, such as Google or OpenAI.
- **Model**: The image generation model, such as Gemini image models or GPT Image models.
- **API Key**: The provider API key used by the deployed agent function.
- **Image Size**: The default image size for Generate Image calls. Actions can override this per call.

![AI Agent image generation settings](imgs/ai-agent-image-gen.avif)

### Generate Image [Action]

The **Generate Image** action allows your app to send a prompt to an Image Generation agent and receive a generated image. You can configure the following options for this action:

- **Select Image Generation Agent**: Select the Image Generation agent you previously configured.
- **Prompt**: The text prompt that describes the image to generate.
- **Size Override**: Optionally override the agent's default image size for this call. You can select **Use Agent Default** or choose a supported size such as **Square (1024 x 1024)**, **Portrait (1024 x 1536)**, or **Landscape (1536 x 1024)**.
- **Action Output Variable Name**: Stores the generated image result so you can display it or use it in later actions.

![AI Agent generate image action](imgs/ai-agent-image-gen-action.avif)

## Video Generation

Use a **Video Generation** agent when your app needs to generate video from a text prompt. This is useful for creating short clips, campaign visuals, animated concepts, visual storyboards, or social media assets.

Video generation settings include:

- **Provider**: The video generation provider, such as Google.
- **Model**: The video generation model, such as Veo 3.1.
- **API Key**: The provider API key used by the deployed agent function.
- **Aspect Ratio**: The default video aspect ratio for Generate Video calls. Actions can override this per call.
- **Duration**: The target video duration.

![AI Agent video generation settings](imgs/ai-agent-video-gen.avif)

:::info
Video generation can take 30 seconds to several minutes. The cloud function keeps the connection open while the provider job runs.
:::

### Generate Video [Action]

The **Generate Video** action allows your app to send a prompt to a Video Generation agent and receive a generated video. You can configure the following options for this action:

- **Select Video Generation Agent**: Select the Video Generation agent you previously configured.
- **Prompt**: The text prompt that describes the video to generate.
- **Aspect Ratio Override**: Optionally override the agent's default aspect ratio for this call. You can select **Use Agent Default** or choose a supported aspect ratio such as **Landscape (16:9)**, **Portrait (9:16)**, or **Square (1:1)**.
- **Action Output Variable Name**: Stores the generated video result so you can display it or use it in later actions.

![AI Agent generate video action](imgs/ai-agent-video-gen-action.avif)

## Deployment Settings

Here, you can fine-tune how your AI Agent is executed. These settings help balance performance, security, and cost for your use case.

- **Require Authentication**: By default, this is set to ON to restrict access to only authenticated Firebase users. When set to OFF, anyone can call your agent, which may pose a security risk.
- **Timeout (seconds)**: Defines how long the agent function can run before being terminated. For example, a value of `60` allows the function up to 60 seconds to complete. Increase if your agent performs long-running operations or processes complex logic.
- **Memory**: Allocates memory for your agent. Higher memory improves performance for heavy workloads but may cost more. For example, choose `256MB` for standard tasks or `512MB+` for agents handling large data or complex logic.
- **Min Instances**: The number of instances kept warm and ready at all times. Set to `0` to minimize costs. For example, setting `Min Instances` > 0 can improve response speed by avoiding cold starts, but this incurs additional cost. Set to `0` for development or low-traffic environments.
- **Max Instances**: The maximum number of instances that can run simultaneously. Helps scale under load and avoid throttling. For example, setting `Max Instances = 10` limits concurrency to 10 requests.

Once configured, click the **Publish** button to make it live.

:::info[For non-Google Agents]

After you successfully deploy the agent, changes to its configuration, such as modifying the system message, model, or temperature, require you to redeploy the agent. For Google chat agents, the configuration is stored on the client side, so redeployment isn't necessary.
:::
