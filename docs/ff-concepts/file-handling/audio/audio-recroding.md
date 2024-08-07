---
title: Audio Recording
slug: /concepts/file-handling/audio-recording
sidebar_position: 1
tags: [Media, Action]
keywords: [Media, Audio Recording, Action, File Handling]
---

# Audio Recording

This action allows users to record audio. Using this action, you can add functionalities like recording voice notes in a note-taking app or practicing pronunciation in a language app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/3ad46b01d88b449b95f5745e3c935af2?sid=ace5029b-dd94-40c5-b3b2-f8bb74d13bbe"
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

## Types of audio recording action

Following are the types of audio recording actions you can trigger:

1. [**Start Audio Recording**](#start-audio-recording-action): This starts the recording. It also provides a name to the recording, which you can use later to stop the recording using the "Stop Audio Recording" **action*.*
2. [**Stop Audio Recording**](#stop-audio-recording-action): This halts the ongoing recording using the name from the "Start Audio Recording" action. To capture and play the recorded audio, make sure to specify the *Action Output Variable Name*, which can be used with the audio player.

## Start Audio Recording [Action]

Follow the steps below to start the recording:

1. Select the widget (e.g., Button, Page, etc.) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
3. Click on the **+ Add Action**.
4. First, [request permission](../../../resources/projects/settings/project-setup.md#request-permission-action) for the microphone.
5. Inside the **TRUE** section, add the **Start Audio Recording** (under *Utilities*) action.
6. By default, the **Name** is set to any random string. However, you can change it to any friendly name.
7. Optional: After starting recording, you might want to update the state variables to reflect changes on UI. For instance, you can enable/disable buttons or start recording animations to provide a visual cue of the ongoing process. This step allows you to enhance the user experience and provide real-time feedback during the recording.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/8eccd1d1c01d43f6b5cb5f0cc844a26b?sid=3d53e332-77bc-47f8-84d5-c7b67265ee19"
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

## Stop Audio Recording [Action]

Follow the steps below to stop the recording:

1. Select the widget (e.g., Button, Page, etc.) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
3. Click on the **+ Add Action**.
4. Search and select the **Stop Audio Recording** (under *Utilities*) action.
5. Choose the **Recorder Name** from the dropdown. This will be the name you provided in the "Start Audio Recording" action.
6. Specify the **Action Output Variable Name**. This will store the actual audio recording, which you can use with any audio player. It stores recording in an **Audio Path** data type.
7. To upload the audio recording to Firebase or Supabase, you can use the [Upload file](../upload-save-file.md) action. When you add this action:
    1. Set the **Upload Type** to the preferred one.
    2. Set **File Type** to **Uploaded File** because the *Stop Audio Recording* action internally stores recorded audio bytes (inside widget state).
    3. Set the **File to Upload** to **Widget State > [action_output_variable_name]Bytes**.
8. For uploading via API, *you don't need to add the Upload file action*. Just directly add the [**API call**](../../../resources/control-flow/backend-logic/api/rest-api.md) and select the API that will upload the file to your server. **Note** that the request body for this API must be in *Multipart* format. You can pass the audio recording via **Widget State > [action_output_variable_name]Bytes** in the API variable. See how to [configure an API for the multipart request body](../../../resources/control-flow/backend-logic/api/rest-api.md#multipart-format).
9. Optional: After stopping the recording, you might want to update the state variables to reflect changes on the UI. For instance, you can enable/disable buttons or stop recording animations.

:::tip
It's always a good idea to have a fail-safe mechanism to ensure recordings are properly stopped, even if the user forgets to do so manually. For instance, you can trigger this action when the user closes the app without explicitly stopping it.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/8a3608a0c70545ac92e820cdaf863b96?sid=fc38aaeb-03b8-462e-9a38-c0e6ef591c82"
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

## Playing audio recording

After you have stopped the recording, you can simply provide the *Action Output Variable Name* to the [Audio Player](audio-player.md) widget to start playing the recorded audio.

:::warning
Currently, recording audio isn't supported in Run or Test modes due to certain limitations. However, for Android and iOS platforms, you can test by downloading the code and following the instructions provided [here](../../../testing-deployment-publishing/exporting-code/ff-cli.md).
:::

Here's how you do it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jcxiXSOQYhN0S9WZAMKo?embed&show_copy_link=true"
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