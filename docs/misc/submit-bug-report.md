---
slug: submit-bug-report
title: Submit Bug Reports
description: Learn how to submit bug report.
tags: [Issue, Troubleshooting]
sidebar_position: 0
keywords: [Submit Bug Reports, Issue, Troubleshooting]
---

# Submit Bug Reports

This page guides you on submitting the bug reports in the GitHub issue tracker.

We have created a [**GitHub repository**](https://github.com/FlutterFlow/flutterflow-issues/issues) specifically for tracking bug reports from our user community. This initiative fosters a more open and collaborative relationship with our users, encouraging them to report any bugs or glitches they encounter while using FlutterFlow.

This will enable us to track, triage, and resolve issues in a timely and efficient manner. So, if you encounter any bugs or issues, please don't hesitate to report them on our GitHub repository! 🐛

:::info
- You should use this only for reporting **FlutterFlow bugs**.
- Any new features, suggestions, and questions should be discussed in the [**community**](https://community.flutterflow.io/home) or submitted through our user feedback form.
:::

Here is the simple flow you can refer to submit the bug report:

![Bug reporting flow](imgs/submit-bug-report-flow.avif)

Before creating a new issue, it's recommended to search the issue tracker to avoid submitting duplicate reports. If you find an existing issue, show your support by upvoting it using the *Thumbs Up* icon. If you have additional information to share or clarifications to make, add them as comments on the original issue. In case you can't find the relevant issue, you can create a new one with all the necessary details. This will help us address the issue faster and more efficiently.

Here are the step-by-step instructions:

1. Open the [issue tracker](https://github.com/FlutterFlow/flutterflow-issues/issues) and click on the **New Issue** button. Note: If you haven't already, you must [create a GitHub account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).

    ![new-issue](imgs/new-issue.avif)

2. On the right side of the **Bug Report**, click the **Get Started** button.

    ![get-started](imgs/get-started.avif)

3. When describing your issue in the **Title** box, be as specific and concise as possible. Use descriptive words that accurately convey the problem. For example, instead of simply writing "*DatePicker issue*," provide more details such as "*Disabled future dates in the Date/Time picker action, still shows*". This will help us and others quickly understand the issue and can also help with searchability in case someone else has experienced the same problem.
    
    ![disabled-future](imgs/disabled-future.avif)


4. If your issue doesn't exist and you allow us to access your project for the sole purpose of investigation, you can tick both checkboxes.

    ![issue-doesnt-exist](imgs/issue-doesnt-exist.avif)

5. In the '**Current behavior**' section, provide as much detail as possible about the behavior you are experiencing.

    ![current-behaviour](imgs/current-behaviour.avif)

6. In the '**Expected behavior**' section and enter a clear and concise description of what you expected to happen. Make sure that the expected behavior is realistic and achievable.

    ![expected-behaviour](imgs/expected-behaviour.avif)

7. In '**Steps to Reproduce**' section, write the step-by-step instructions to reproduce the bug. Also, mention any specific settings or configurations that might be relevant. This will help us diagnose the issue. **Note**: Issues cannot be accepted if they are too vague. For example, "project fails to build."

    ![steps-to-reproduce](imgs/steps-to-reproduce.avif)

8. The '**Bug Report Code**' is a unique code that helps us assess your issue. To copy it, open the **Widget Tree** > **Right Click** > select **Get Bug Report Code** and paste it here. **Note** that if an error is related to a specific widget, select the widget, right click and get the code.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/on7fLcv4OGR3yDqeTv9v?embed&show_copy_link=true"
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


9. Use the '**Context**' section to describe how it has affected you and what you are trying to accomplish.
10. In '**Additional Info**' you can provide a screenshot or recording, links, references, or anything else that will give us more context about the issue you are encountering.

:::tip
You can attach any media by dragging it here.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/reBJv5XiQSESfEOFVgFc?embed&show_copy_link=true"
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
:::

11. We must know the environment in which you experienced the issue. You can post such information under the '**Environment**' section.

    ![environment](imgs/environment.avif)

12. Click **Submit New Issue**.

    ![submit-new-issue](imgs/submit-new-issue.avif)

Once done, your issue will be listed on the issues list, and our team will assign the appropriate label.

![submitted](imgs/submitted.avif)