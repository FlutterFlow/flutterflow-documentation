---
slug: /testing/test-pilot
title: Test Pilot
description: Learn how to create and run AI-powered QA tests for your FlutterFlow app using Test Pilot.
tags: [Automated Tests, Testing]
sidebar_position: 2
keywords: [Test Pilot, AI Testing, QA Testing, Testing, FlutterFlow, Automated Tests, Testing]
---

# Test Pilot

Test Pilot in FlutterFlow allows you to run AI-powered tests for your app. Instead of building step-by-step integration tests manually, you create natural-language tests, group related tests together, and ask Test Pilot to interact with your app like a QA tester.

This is useful when you want to validate important user journeys before publishing or sharing a new build. For example, you can ask Test Pilot to sign in with test credentials, add an item to a cart, open the profile page, or confirm that a checkout flow lands on the expected success screen.

At a high level, Test Pilot creates a web build snapshot of your project, launches the app in a browser-based QA environment, and uses an AI agent to follow each test's instructions. After the run completes, you can review pass or fail status, per-test summaries, screenshots, playback, actions taken, and test usage.

## Create Test

To get started, first create a **Test Group**. Use test groups to organize related tests, such as authentication, checkout, profile settings, or onboarding.

After you create or select a test group, add tests that describe the exact journey Test Pilot should perform. Each test has:

- **Test Name**: The label shown in the test group and run results.
- **Entry Page**: Optional initial route for the test. Use **App default** when the app should start from its default entry page.
- **Enabled or Disabled state**: A toggle to enable or disable a test. Only enabled tests are included when the group runs.
- **Instructions**: Natural-language steps for the AI agent to follow.
- **Expected Outcome**: Optional success criteria that Test Pilot should verify after completing the instructions.
- **Restart before test**: Optional behavior that starts the app fresh before that test. This is **turned off by default, so tests are executed sequentially** one by one and can continue from the state left by the previous test. Turn it on when a test should start from a clean app state and not depend on earlier tests.


Write instructions the way you would brief a QA teammate. Mention the screen, the UI element, the action to take, and the expected result.


For example, a login test might use:

- **Instructions**: `Wait for the screen to load, then enter $email and $password into the text fields and click the continue button.`
- **Expected Outcome**: `The app should land on the home page.`

:::tip
`$email` and `$password` are [**Test Parameters**](#test-parameters). After you create a parameter, you can reference it directly in test instructions by adding `$` before the parameter name.
:::

Here's how to create tests:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/0KwB1z9CjwGPNHmUoRGz?embed&show_copy_link=true"
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

### Test Parameters

Test Parameters let you store reusable values that Test Pilot can substitute into test instructions. This is especially helpful for credentials, environment-specific values, or other data that you do not want to type into every test.


Test Parameters are managed per [FlutterFlow Environment](../development-environments/development-environments.md). Use the **Environment** dropdown to switch between environments, then add the parameter values for the selected environment.

Each parameter includes:

- **Name**: The variable name used in instructions.
- **Value**: The value Test Pilot substitutes when running the test.
- **Description**: A clear note describing what the value is used for.
- **Encryption toggle**: Marks sensitive values so they are encrypted.


To use a parameter, create it from **Test Parameters**, then reference it in instructions with a dollar sign, such as `$email` or `$password`.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/dvPY8TXg5kjxfVCvF5Jv?embed&show_copy_link=true"
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

:::caution
For login tests, use a separate test account instead of a real user account. Secret parameters help hide sensitive values, but you should avoid using production credentials in Test Pilot runs.
:::

## Run Test

To run a test group, select the test group you want to run, click **Run Test Group**, choose the run configuration, and then click **Run Tests**.

Run configuration options include:

- **Device Sizes**: Uses the current canvas size by default. You can add predefined devices or custom width and height values. The run dialog supports up to 3 selected devices.
- **Brightness**: Choose light or dark mode. Dark mode is available only when dark mode is enabled in the project design system.

:::info
Before starting a run, make sure the selected group has at least one enabled test, the project has no blocking errors, the selected environment is valid, and no other Test Pilot run is active for the same project or group.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/RhNbcACfh114Eu4nP6cZ?embed&show_copy_link=true"
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

## Review Test Results

The **Run History** section shows the previous and active Test Pilot runs for the selected group. Click **View Results** to open the run details page. From there, you can review every test in the run and inspect the AI agent's explanation for each result.

Each test result can include:

- **View Test Playback**: Opens a step-by-step playback of the agent's interaction with the app. When you open Test Playback, you can use **Previous** and **Next** to move through each step, select a screenshot from the thumbnail strip, and review the agent's reasoning for that step. The playback side panel includes:

    - **Goal**: What the agent was trying to do in the selected step.
    - **Observation**: What the agent saw on the screen.
    - **Actions**: The action taken in that step and whether it succeeded.
    - **Config**: Displays the test run duration, screen size, and options to show or hide the device frame and overlay. It also includes a **View JSON** option to inspect the raw step data.

- **Screenshots**: Captured screens from the run. Use these to quickly see what the agent saw at key moments.
- **Actions Taken**: The actions the agent performed while executing the test, including clicks, text entry, key presses, completion steps, and whether each action succeeded.
- **Open Snapshot**: Opens the build snapshot used for the run.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ZLSPxm78ch2Tc0eDL6TE?embed&show_copy_link=true"
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


## Best Practices

- Keep each test focused on one user journey, such as login, checkout, or opening profile settings.
- Start instructions with any setup the agent needs, such as waiting for the screen to load.
- Use clear UI descriptions, such as "click the profile icon on the top left side" instead of "click the icon."
- Add an expected outcome when the result matters, such as "the app should land on the home page."
- Store separate parameter values for each environment.
- Review screenshots, playback, and actions taken when a test fails, because the summary may point to a build, startup, UI, or instruction issue.
- Turn on **Restart before test** when a test should start from a clean app state. Leave it off when tests are intentionally designed to run sequentially.

## Test Pilot Credits

Test Pilot is available on paid plans and uses test-based billing. If free trial runs are available, the Test Pilot sidebar shows the remaining free runs. Otherwise, runs use tests from an assigned Test Pilot pass.

A Test Pilot pass is a paid add-on that includes a fixed number of tests. The current price is **$5 for 100 tests**.

Before you start a run, FlutterFlow shows how many credits the run will use. This lets you review the cost of running the selected test group before you click **Run Tests**.

Pass types:

- **Personal pass**: Purchased from Account billing and assignable to one personal project owned by that user.
- **Team pass**: Purchased from Teams billing and assignable to one project in the same team.

Pass assignment is permanent. You can assign an unassigned pass to a matching project, but you cannot manually clear, update, transfer, or switch it afterward. If the assigned project is deleted or moved into a scope that no longer matches the pass, the pass may become unassigned.

## FAQs

<details>
<summary>Why can't I run tests?</summary>
<p>
Check that the project has available tests or free runs, at least one enabled test, editor access, no active Test Pilot run, a valid environment, and no blocking project errors.
</p>
</details>

<details>
<summary>Why do I see 0 tests available?</summary>
<p>
This can happen when no Test Pilot pass is assigned to the project, the assigned pass has used all included tests, the assigned pass no longer matches the project scope, or test availability failed to load.
</p>
</details>

<details>
<summary>Why can't I assign my pass?</summary>
<p>
A pass may already be assigned, the project may already have a pass, the pass may not match the project scope, or you may not have the required billing permissions. Personal passes can only be assigned to matching personal projects, and team passes can only be assigned to matching team projects.
</p>
</details>

<details>
<summary>Can support move my pass?</summary>
<p>
Pass assignment is intended to be permanent. Contact support if you suspect a data issue, such as a stale assignment after a project was deleted or moved.
</p>
</details>

<details>
<summary>Do beta, special-access, or enterprise users get free tests?</summary>
<p>
Do not assume free tests are included. Customers need available free runs or an assigned Test Pilot pass unless their plan or contract states otherwise.
</p>
</details>

<details>
<summary>Why doesn't my pass have a regional discount?</summary>
<p>
Test Pilot passes do not use regional discounts. The billing page shows the price that applies to your account.
</p>
</details>
