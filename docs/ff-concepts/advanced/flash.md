---
slug: /concepts/advanced/flash
title: Flash
description: Flash is FlutterFlow's Dart SDK and CLI for building and modifying FlutterFlow apps in code. Install, concepts, tutorials, and reference on one page.
tags: [Flash, Flutter, Dart, CLI, AI Agents]
sidebar_position: 1
keywords: [Flash, FlutterFlow, Flutter, Dart, CLI, SDK, AI agents, code-first]
---

# Flash

[Flash](https://pub.dev/packages/flutterflow_flash_beta) lets you build FlutterFlow apps by writing Dart code instead of clicking around the visual builder. You write your app in a simple Dart file, check it for errors on your computer, then push it to FlutterFlow with one command. It works for brand-new apps and for changes to apps you already have, and it's designed so both people and AI agents can use it.

:::info[Remember]

- **Flash is not a replacement for the visual builder.** FlutterFlow is still faster for most visual work. Flash is for precision, repeatability, and automation.
- **Flash doesn't execute your app.** It produces a FlutterFlow project, which you can test and run inside FlutterFlow visual builder.

:::

A FlutterFlow project is the source of truth. Flash is how you create or change it from code. You can write your app in Dart, open the result in FlutterFlow's visual editor, and keep going in either direction. Both paths give you the same FlutterFlow app.

![flash-ff-builder-using-same-ff-app.avif](imgs/flash-ff-builder-using-same-ff-app.avif)

Flash serves two kinds of builders equally, operating on the same workspace:

- **FlutterFlow Developers:** Flash is useful when you want changes you can review like any other code, rather than diffs that only live inside the editor. It's faster for repetitive or structured edits, lets you inspect a project before you change it, and gives you a reliable local workflow with validation, traces, and history.
- **AI-driven Builders:** Flash is useful when you want agents to work in a real code workspace instead of an opaque visual-only surface. It lets them generate or refine app changes in Dart, keeps the workflow deterministic and easy to hand off, and combines FlutterFlow's visual builder with agent-friendly development.

:::caution

- Flash is in beta. The API surface may change before 1.0.
- Tutorials on this documentation were tested against `flutterflow_flash_beta: ^0.1.5`. If you're on a newer version, it should still work, but flag anything that looks off.

:::

## Flash vs. FlutterFlow Visual Builder

Flash and the FlutterFlow visual builder aren't rivals. They operate on the same FlutterFlow projects. The question is always **which tool is faster and safer for the change you're about to make.** Here is the quick decision table you can use when you're not sure which to reach for:

| You want to… | Reach for |
| --- | --- |
| Quickly lay out a new screen by dragging widgets | Visual builder |
| Tweak a color, swap an image, adjust padding | Visual builder |
| Explore what an interaction feels like before committing | Visual builder |
| Create a new app from a structured spec or template | Flash |
| Make the same change across many pages, components, or projects | Flash |
| Let an AI agent build or edit the app deterministically | Flash |
| Do exploratory UI work with instant feedback | Visual builder |
| Refactor page structure programmatically | Flash |

**When the Visual Builder wins**

The visual builder is unbeatable at three things: **exploration, feel, and small edits.** Dragging widgets onto a canvas, trying layouts, and seeing the result instantly is the fastest way to figure out what you want. Adjusting spacing, colors, fonts, and animations is easier when you can see the change as you make it. Changing a button label, swapping an icon, or moving a single widget is a five-second job in the editor.

If you're still deciding what the app *should look like*, stay in the visual builder.

**When Flash wins**

Flash wins when **precision, repeatability, or review** matters more than instant visual feedback.

- **Large or structured changes.** "Add the same search-and-filter bar to eight list pages" is one well-scoped Flash patch. In the visual builder it's eight manual edits with drift between them.
- **Scaffolding a new app from a spec.** If you already know what you want i.e., shapes of pages, data models, navigation — writing it in Dart is often faster than clicking it into existence.
- **Reviewable changes.** A Flash change is a Dart diff. You can review it in a pull request, ask for feedback, revert it, and replay it in another project.
- **Source control.** Your FlutterFlow work lives in a git repo, not only in FlutterFlow's own history.
- **AI agents.** Agents make far fewer mistakes with a code workspace, a validator, and a run history than they do in a visual surface.

## Install

:::tip[Prerequisites]

- **Dart 3.7 or newer.** Check with `dart --version`. If you don't have Dart, install it from [**dart.dev/get-dart**](https://dart.dev/get-dart) — or install Flutter, which includes Dart.
- **A FlutterFlow API key.** Generate one from your FlutterFlow account settings.

:::

You can install the Flash CLI by hitting the following command in your terminal:

```bash
dart pub global activate flutterflow_flash_beta
```

This installs the `flash` command globally.

To use Flash as a library in an existing Dart package instead of (or in addition to) the CLI:

```bash
dart pub add flutterflow_flash_beta
```

Now, verify the installation with Flash Doctor:

```bash
flash doctor
```

`flash doctor` prints:

- The installed Flash version
- The current proto fingerprint (the schema version your Flash install targets)
- Whether the matching local validator binary is cached for your platform

If anything is missing or mismatched, `flash doctor` tells you what to do next.

## Create New App

Let’s build a single-page FlutterFlow app with a title, a short description, and a button that shows a snackbar when tapped. Nothing fancy — the point is to walk the full round-trip from Dart source to a live FlutterFlow project.

:::info

Before you start, make sure you've completed [**Flash Install**](#install).

:::

### 1. Create a Workspace

Create a new Flash workspace called `hello-flash`:

```bash
flash init hello-flash
cd hello-flash
```

`flash init` scaffolds a ready-to-edit workspace. Take a moment to look around:

```
hello-flash/
├── .env.example
├── AGENTS.md
├── CLAUDE.md
├── flash/
│   ├── app.dart              ← you'll edit this
│   └── brownfield_patch.dart
├── patterns/
├── pubspec.yaml
├── references/
└── tooling/
```

You'll only touch `flash/app.dart` in this tutorial.

### 2. Add your API key

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and paste your FlutterFlow API key:

```bash
FF_API_KEY=your-key-here
```

Install Dart dependencies:

```bash
dart pub get
```

:::caution[Keep your API key private]
Treat your API key like a password. Don't paste it into chat, commit it to source control, or share it in screenshots. `.env` should always be in `.gitignore`.

If you think a key has been exposed, rotate it in FlutterFlow immediately.
:::

### 3. Write the App

Open `flash/app.dart` and replace the Scaffold widget with this:

```dart
Scaffold(
      appBar: AppBar(title: 'Flash Demo'),
      body: Container(
        padding: 24,
        child: Column(
          spacing: 16,
          crossAxis: CrossAxis.start,
          children: [
            Text('Build FlutterFlow apps with Dart', style: Styles.headlineSmall),
            Text(
              'Flash makes FlutterFlow changes reviewable, repeatable, and agent-friendly.',
              style: Styles.bodyMedium,
              color: Colors.secondaryText,
            ),
            Button(
              'Show Snackbar',
              width: double.infinity,
              onTap: Snackbar('Flash is wired correctly.'),
            ),
          ],
        ),
      ),
    ),
```

What's happening here:

- `app.page` declares a page called `StarterPage` at route `/`, marked as the initial page.
- The `body` is a standard Flutter-like tree: `Scaffold` → `AppBar` + `Container` → `Column` of `Text`, `Text`, `Button`.
- `onTap: Snackbar(...)` wires the button to a FlutterFlow Snackbar action.

If you've written Flutter before, this will feel familiar. If you've used FlutterFlow, every one of these elements maps to a widget you'd otherwise drag onto the canvas.

### 4. Validate Locally

Before pushing anything to FlutterFlow, run a dry run:

```bash
flash validate flash/app.dart
```

Your Dart file is what Flash calls a DSL — short for "domain-specific language," which just means code written for one specific purpose (in this case, describing a FlutterFlow app). `flash validate` compiles your DSL, checks it against the FlutterFlow schema, and reports any errors.

:::tip[Validate early, validate often]
`flash validate` is fast and free. Run it every time you change the DSL. If it fails, fix it before `flash run`.
:::

### 5. Push to FlutterFlow

Now create the real project in your FlutterFlow account:

```bash
flash run flash/app.dart --project-name "Hello Flash" --commit-message "Create starter page"
```

Flash will compile your DSL, create a new FlutterFlow project named "Hello Flash", apply your page, theme, and font, and return the project ID and a URL to open it.

### 6. Open it in FlutterFlow

Open the URL from the `flash run` output, or go to your FlutterFlow dashboard and find the "Hello Flash" project.

You'll see `StarterPage` in the page list, your theme colors applied, the `Text` + `Text` + `Button` column laid out in the canvas, and the button wired to a Snackbar action.

Try running the project in FlutterFlow's preview. Tap the button. The snackbar you declared in Dart fires just like any other FlutterFlow action.

Here's exactly how you do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/XD8uxbwePsbfvFgJPCMJ?embed&show_copy_link=true"
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

## Create New App with AI agent

Flash workspaces are designed to hand off to AI agents. Here's the same tutorial from an agent's perspective:

1. Complete [step 1](#1-create-a-workspace) and [step 2](#2-add-your-api-key) from the Create New App section.
2. You open the workspace in Claude Code (or any agent that can read `AGENTS.md`).
3. You prompt: *"Read AGENTS.md, then edit flash/app.dart to create a single-page starter app with a title, description, and a snackbar button. Validate before telling me you're done."*
4. The agent reads `AGENTS.md`, browses `references/` for similar DSLs, edits `flash/app.dart`, runs `flash validate`, and reports back.
5. You run `flash run` yourself.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/msL6390HiCBNEtAGdtcS?embed&show_copy_link=true"
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

## Modify Existing App

Let’s modify the existing FlutterFlow app with AI agents. Every Flash workspace ships with `AGENTS.md` and `CLAUDE.md` — briefing files that tell an agent what the environment is, where to read, where to write, and which commands are safe to run.

**The key principle**: The agent drafts, the human ships. The agent can write DSL, validate it, and iterate on errors. You stay in control of `flash run` — the command that actually modifies your FlutterFlow project.

### 1. Prepare the Workspace

Pick a FlutterFlow project you're happy to change. Then set up a fresh workspace scoped to it:

```bash
flash init agent-edits --project <project-id>
cd agent-edits
cp .env.example .env
# edit .env and paste your FF_API_KEY
dart pub get
flash refresh-context <project-id>
```

All the usual setup — nothing agent-specific yet. The important part is that you do this **before** the agent takes over, so the agent doesn't have to handle your API key.

:::caution[Your API key stays with you]
Never paste your `FF_API_KEY` into the agent chat. Put it in `.env` yourself. The agent reads and writes files in the workspace; it doesn't need to see the key, and it shouldn't.
:::

### 2. Open the Workspace in your Agent

Open `agent-edits/` in Claude Code (or your agent of choice). You can also confirm that the agent can read and write files in the workspace directory.

### 3. Point the Agent at AGENTS.md

Open a conversation with the agent and start with something like:

> Read `AGENTS.md` and `CLAUDE.md` in this workspace before doing anything else. Then browse `references/` and `patterns/` so you understand the DSL shape and the brownfield patterns available. Don't edit anything yet — just tell me what you understand about this workspace.
> 

Wait for the agent to respond. Read its summary. If it misunderstands something, correct it before proceeding. It's much cheaper to fix framing now than after the agent has written a patch against the wrong file.

### 4. Give the Task

Now describe the change in natural language. Some examples, in rough order of difficulty:

- "Add a heading and a short description block to the top of the `HomePage` body. Text values: 'Welcome' as heading, 'Your dashboard at a glance.' as description."
- "On the `Products` page, add a search field above the existing product list."
- "Replace the primary theme color with `0xFF6750A4` and make sure any places that reference it explicitly still look correct."

:::tip[Also add explicit rules, such as:]
- Inspect the target page with `flash inspect <project-id> --page <PageName>` before writing anything.
- Write the patch in `flash/brownfield_patch.dart`.
- Run `flash validate flash/brownfield_patch.dart --project-id <project-id>` and iterate until it passes.
- Do NOT run `flash run`. I will review your changes and run it myself.
- If you hit an error you can't explain, stop and ask — don't guess.

:::

This prompt pattern: **Read context, do the work, stop before the irreversible step** — is the shape of a good agent handoff in Flash.

### 5. Let the Agent Work

The agent will go through a loop roughly like this:

1. Run `flash inspect` to understand the target page's current shape.
2. Open one or more files in `references/` or `patterns/` to find the closest example.
3. Write a first draft of `flash/brownfield_patch.dart`.
4. Run `flash validate`.
5. Read the error (if any), adjust the DSL, and validate again.
6. Report back when validation passes.

:::info[Things to Know]

- **Thrashing on the same error:** If the agent fails validation the same way three times in a row, interrupt. The framing is likely wrong. Point it at a more specific reference DSL, or clarify the task.
- **Making changes you didn't ask for:** Agents sometimes "improve" things adjacent to the task. Tell it to stick to the task and revert any out-of-scope changes before continuing.

:::

### 6. Run it Yourself

When you're satisfied with the patch, you run the final command:

```bash
flash run flash/brownfield_patch.dart --project-id <project-id> --commit-message "Agent: add welcome block to HomePage"
```

Open the project in FlutterFlow. Confirm the change is exactly what you intended.

:::tip[Tips for longer agent sessions]

- **Commit after every successful `flash run`.** Your git history becomes the project's change log.
- **Keep tasks small.** A single agent prompt should produce a single patch that does a single logical thing. "Refactor the whole app" is not a task — break it into ten of them.
- **When the agent gets stuck, check context first.** Run `flash context-check`. Stale context produces errors that look like agent confusion but are actually cache drift — see [**Project context and staleness**](#project-context-and-staleness).
- **Keep `flash run` to yourself for now.** Even once you trust the agent, the discipline of reviewing before running keeps the workflow honest.

:::

Here's exactly how you do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/UnMbTAYdTGTBGLKb7N2u?embed&show_copy_link=true"
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

## Flash Concepts

This section covers the mental model you need to use Flash effectively. If you've completed tutorial “Create New App” and “Modify Existing App”, a lot of this will feel like names for things you've already seen.

### Workspace Anatomy

Every `flash init` produces the same workspace shape:

```
my-app/
├── .env.example            Template for your API key. Copy to .env.
├── AGENTS.md               Instructions for AI agents.
├── CLAUDE.md               Claude-specific agent instructions.
├── flash/
│   ├── app.dart            Entry point for building a NEW app (greenfield).
│   └── brownfield_patch.dart   Entry point for editing an existing app.
├── patterns/               Copy-paste recipes for common brownfield changes.
├── pubspec.yaml            Dart dependencies.
├── references/             Complete working DSLs to learn from.
├── tooling/                Wrapper scripts for common flows.
└── .flash/                 Local run history, traces, and cached context.
                            (Created automatically on first run.)
```

A few of these deserve special attention:

- **`flash/app.dart`** and **`flash/brownfield_patch.dart`** are the two places your DSL lives. You'll almost never have both active at once — see [Greenfield vs. brownfield](#greenfield-vs-brownfield).
- **`references/`** is your teacher. When you don't know how to express something in the DSL, open the most similar reference app and copy the pattern. This is the single most effective way to learn Flash.
- **`patterns/`** is more focused: short, named recipes like "add a search filter to an existing list page" that you adapt into your `brownfield_patch.dart`.
- **`AGENTS.md`** and **`CLAUDE.md`** are what make the workspace agent-friendly. An agent that reads these files gets a working understanding of the environment without needing you to explain it.
- **`.flash/`** is where Flash stores state: run history, traces, and a cached representation of the FlutterFlow project you're working on. Don't commit this folder — add it to `.gitignore`.

### Greenfield vs. Brownfield

Flash has two modes for two situations:

- **Greenfield**: You're creating a new FlutterFlow project from scratch. You work in `flash/app.dart`. Your DSL describes the entire app. When you `flash run`, Flash creates a new project in your FlutterFlow account.

    ```bash
    flash run flash/app.dart --project-name "My New App" --commit-message "Initial app"
    ```

- **Brownfield**: A FlutterFlow project already exists and you want to change it. You work in `flash/brownfield_patch.dart`. Your DSL describes only the *changes* you want to make, not the whole app. When you `flash run`, Flash applies the patch to the existing project.

    ```bash
    flash run flash/brownfield_patch.dart --project-id <id> --commit-message "Add search filter"
    ```

The rule of thumb:

- **First-time push of a new app** > greenfield, `flash/app.dart`, `-project-name`.
- **Every subsequent change** > brownfield, `flash/brownfield_patch.dart`, `-project-id`.

Once a project exists in FlutterFlow, you almost never go back to `flash/app.dart` for it — brownfield is the normal mode.

### Validate vs. Run

These two commands are your inner dev loop.

**`flash validate <file>`** is a dry run. It:

- Compiles your DSL.
- Checks it against the FlutterFlow schema.
- Reports errors and warnings.
- Does **not** touch your FlutterFlow account.

It's fast and free. Run it every time you change the DSL.

**`flash run <file>`** is the real thing. It validates first (same check as above), then serializes the result and pushes it to FlutterFlow. This creates or modifies an actual project in your account.

The rhythm:

```
edit → flash validate → edit → flash validate → flash run → review in FlutterFlow → repeat
```

If `flash validate` fails, fix it before `flash run`. Running straight to `flash run` without validating is a common mistake that wastes time — `flash run` does the same validation internally, so you're just moving the error report later.

### Project Context and Staleness

For brownfield edits, Flash keeps a **local cached representation** of the FlutterFlow project under `.flash/`. This is called the project **context**. It's what lets `flash inspect` show you the project structure quickly and what Flash uses to reason about your patch.

Context can go stale. This happens whenever the FlutterFlow project changes in a way Flash doesn't see:

- Someone else edits the project in the visual builder.
- You yourself edit it in the visual builder between Flash runs.
- A teammate runs `flash run` from another workspace.

Two commands manage context:

- **`flash context-check`** : Tells you whether your local context matches the current state of the project. Run this before starting non-trivial brownfield work.
- **`flash refresh-context <project-id>`**: Pulls a fresh copy of the project into your workspace. Run this whenever `context-check` reports drift, or as a habit at the start of a work session.

Stale context usually shows up as confusing `flash validate` errors — Flash thinks a page exists when it doesn't, or misses a field that was added. If a brownfield validation fails for a reason that doesn't match what you see in the editor, refresh context first and try again.

## FAQs

<details>
<summary>
`flash run` fails with an authentication error
</summary>

<p>
Confirm `FF_API_KEY` is set in `.env` and the key is valid. Try passing `--api-key <your-key>` directly to rule out env-loading issues. If the CLI flag works but `.env` doesn't, check that your shell is running `flash` from the same directory as the `.env` file — Flash loads `.env` from the current working directory.
</p> 
</details>


<details>
<summary>
`flash doctor` says the validator is missing
</summary>

<p>
Try running the `flash precache` to download it.
</p> 
</details>

<details>
<summary>
`flash validate` fails with a proto fingerprint mismatch
</summary>

<p>
Your local validator is out of date with the Flash version you're running. Run `flash precache` to refresh it, or reinstall Flash with `dart pub global activate flutterflow_flash_beta`.
</p> 
</details>

<details>
<summary>
`flash validate --project-id <id>` fails saying a page or widget doesn't exist, but you can see it in FlutterFlow
</summary>

<p>
This is often caused by stale local project context. Flash caches a local copy of your FlutterFlow project under `.flash/`, and when that cache is out of date, validation can fail in ways that look like logic bugs.

Fix it by running:

```bash
flash context-check
flash refresh-context <project-id>
```

`context-check` tells you whether your local copy matches the current state of the project. `refresh-context` pulls a fresh copy.

</p> 
</details>

<details>
<summary>
Validation passes locally but `flash run` reports conflicting state
</summary>

<p>
This is usually caused by stale cached project context under `.flash/`. Refresh your local copy of the project:

```bash
flash context-check
flash refresh-context <project-id>
```

</p> 
</details>


<details>
<summary>
Error messages reference widget keys or IDs you don't recognize
</summary>

<p>
This is another common sign of stale local project context. Run:

```bash
flash context-check
flash refresh-context <project-id>
```

</p> 
</details>

<details>
<summary>
How can I prevent stale context issues?
</summary>

<p>
Run `flash context-check` at the start of every brownfield work session. Run `flash refresh-context` whenever someone else has edited the project, or whenever you've edited it in the visual builder between Flash runs. In team environments, treat `refresh-context` like `git pull` — do it reflexively before starting work.
</p> 
</details>
