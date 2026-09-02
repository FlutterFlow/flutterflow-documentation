---
slug: /concepts/animations/shaders
title: Shaders
description: Configure ShaderFill and ShaderWrapper presets, animation modes, touch effects, actions, and custom Flutter fragment shaders in FlutterFlow.
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 5
keywords:
  - FlutterFlow
  - Shaders
  - Concepts
last_verified: 2026-09-02
---
# Shaders

Shaders let you add rich visual effects to your app, such as animated gradients, ripple distortions, dissolve transitions, and interactive touch effects. Instead of using static images or simple color backgrounds, shaders generate visuals in real time using the device’s graphics processor (GPU). This makes it possible to create smooth animations and procedural textures that feel dynamic and alive.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/u8ydfkhmQQBEWppH87Sf?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

## Shader Widgets

FlutterFlow provides two shader widgets, each designed for a different purpose. Choose the one that best matches how you want to apply the visual effect in your UI.

| If you want to... | Use |
| --- | --- |
| Draw a procedural background or standalone effect | **ShaderFill** |
| Distort, filter, reveal, or dissolve an existing widget | **ShaderWrapper** |

### ShaderFill

The **ShaderFill** widget creates a standalone shader effect that fills a rectangular area. It does not contain any child widgets and works as its own visual element in the UI. This makes it ideal for decorative effects such as animated gradients, procedural textures, or dynamic backgrounds. You can control its size directly using the width and height properties.

For example, you can use the **ShaderFill** widget to create a visually engaging animated gradient background for an onboarding or welcome screen.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/cdXDHhay4ItCe6Y2i64m?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

### ShaderWrapper

The **ShaderWrapper** widget applies a shader effect on top of an existing widget. Instead of rendering a standalone visual, it wraps a child widget and modifies how it appears on screen. This is useful when you want to add effects like ripples, burn transitions, or dissolve animations to elements such as images, containers, or other UI components.

:::info

The **ShaderWrapper** widget automatically takes the size of the child widget it contains.

:::

For example, instead of abruptly removing a UI element, wrap it with a **Shader Wrapper** to apply a visual effect that gradually fades or distorts it, helping users understand that it’s being removed.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/x5Pt3n7yNA1IGnnfchKb?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

Internally, it uses the [**material_palette**](https://github.com/FlutterFlow/material_palette) package, developed by the FlutterFlow team, to power the shader-based visual effects.

:::

## Shader Mode

Every shader widget includes a **Shader Mode** setting that lets you choose how the shader is defined and applied. You can either use ready-made effects or bring your own custom shader.

- **Preset:** Select from a library of built-in shader effects. Each preset includes adjustable parameters such as colors, speed, intensity, and more, allowing you to easily customize the look and behavior directly from the properties panel.
- **Custom:** Upload a local `.frag` (fragment shader) asset and control its float uniforms from FlutterFlow. In the builder, a custom ShaderFill displays a placeholder; a custom ShaderWrapper displays its child without the effect. Run or test the app to see the shader output.

## Preset

Presets are ready-to-use shader effects that you can quickly apply and customize without writing any code.

:::tip

You can explore and try out all available [**presets here**](https://flutterflow.github.io/material_palette/).

:::

### ShaderFill presets

ShaderFill offers these standalone effects:

| Family | Presets |
| --- | --- |
| Linear gradients | **Gritty Gradient**, **Perlin Gradient**, **Simplex Gradient**, **FBM Gradient**, **Turbulence Gradient**, **Voronoi Gradient**, **Voronoise Gradient** |
| Radial gradients | **Radial Gritty Gradient**, **Radial Perlin Gradient**, **Radial Simplex Gradient**, **Radial FBM Gradient**, **Radial Turbulence Gradient**, **Radial Voronoi Gradient**, **Radial Voronoise Gradient** |
| Organic and material effects | **Marble Smear**, **Fur**, **Iridescent Liquid**, **Liquid Patina**, **Metal Smoke** |

Gradient presets combine color transitions with procedural noise. The radial variants spread the effect around a center instead of along a linear direction. **Marble Smear** and **Fur** can react to pointer input when **Interactive** is enabled.

### ShaderWrapper presets

ShaderWrapper offers these child-processing effects:

| Family | Presets |
| --- | --- |
| Ripple | **Ripple**, **Clickable Ripple** |
| Burn | **Burn**, **Radial Burn**, **Tappable Burn** |
| Smoke | **Smoke**, **Radial Smoke**, **Tappable Smoke** |
| Dissolve | **Pixel Dissolve**, **Radial Pixel Dissolve**, **Tappable Pixel Dissolve** |
| Touch distortions | **Tappable Slurp**, **Fur Mask** |
| Filters and material effects | **Iridescent Liquid**, **Kuwahara**, **Crepuscular Rays**, **Dither**, **Peel**, **Turbulence** |

**Kuwahara** and **Dither** are time-independent filters and default to **Implicit** time behavior. **Peel** is a transition effect and defaults to **Explicit**. Other presets default to **Continuous** when selected.



## Implicit Animated

For a **preset** shader, enabling [**Implicit Animated**](implicit_animations.md) makes changes to supported preset parameters and the background color transition smoothly instead of updating instantly. This is useful when those values come from app state. Configure the animation duration and curve in the same property section; the defaults are 500 ms and Linear.

Implicit animation does not currently interpolate the extra float uniforms added to a **custom** shader. Those values still update directly.

## Time Animation Behavior

Time Animation Behavior controls how a shader animates over time. It defines whether the animation runs automatically, is controlled manually, or follows a custom timeline.

### Continuous (default)

The shader animates automatically in a smooth, endless loop with no setup required. This is ideal for ambient effects like animated backgrounds, gradients, or subtle motion that should always be running.

:::tip

You can have the **Time Animation Behavior** set to **Continuous** while the widget is [**Implicit Animated**](#implicit-animated). This allows the animation to run continuously while still enabling you to control specific parameters when needed.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/SghJGpZwuglC7HPwfhUz?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

### Implicit

You control the shader's time input using a **Time** value from 0 through 10. Bind it to state or another numeric source to scrub the effect, or use a fixed value to freeze the shader at a particular point. The Shader Animation action is for **Explicit** mode; it does not drive this value for you.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/0DRRv5qFpgdbFHyz989C?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

### Explicit

Provides a configured timeline with curve, duration, delay, loop, reverse, invert, and range start/end controls. Duration defaults to 2000 ms. **Reverse** is available with looping and plays the timeline back and forth. Use this mode when an action should start, stop, or reset the shader.

### Control an explicit shader with an action

1. Set the shader widget's **Time Animation Behavior** to **Explicit**.
2. Select the button or other widget that should control it, then open the **Actions** panel.
3. Add a **Shader Animation** action.
4. Under **Choose Shader Widget**, select a shader on the same page or component.
5. Choose **Start Animation**, **Stop Animation**, or **Reset Animation**.

**Start Animation** lets the configured time source run. **Stop Animation** returns the shader to its implicit time value, which is 0 unless that value is configured. **Reset Animation** stops it for one frame and then starts it again from the beginning. A shader targeted by this action is initially held until **Start Animation** runs. Shader Animation actions cannot currently be used inside an Action Block.

## Interactive Mode

Some shader presets support touch and tap interactions, allowing users to directly influence the visual effect. When **Interactive** is enabled, users can tap or drag on the shader to trigger dynamic responses such as ripples, burn marks, distortions, or smearing effects, making the UI feel more engaging and responsive.

<video className="docs-video" autoPlay loop muted playsInline controls aria-label={"Interactive shader responding to pointer input"}><source src={require("./animation_gifs/st.mp4").default} type="video/mp4" /></video>

The following presets expose **Interactive**:

- **Fill:** Marble Smear and Fur
- **Wrapper:** Clickable Ripple, Tappable Burn, Tappable Smoke, Tappable Pixel Dissolve, Tappable Slurp, and Fur Mask

Use **Continuous** time behavior for pointer-driven presets. A non-continuous time source can prevent their interaction simulation from advancing.

### Persist Taps

Available for presets that support tap effects. When enabled, earlier tap effects remain in the shader's interaction history; when disabled, the shader can replace or clear prior taps according to the preset's behavior.

### Tap Animation

For presets that support taps, this configures the tap timeline separately from the main shader timeline, including curve, duration, delay, loop, reverse, invert, and range.

## Cache

The **Cache** option adds a repaint boundary around the shader. It can reuse the shader subtree's composited layer when an ancestor repaints, instead of walking into the shader subtree. It does not turn a continuously animated shader into a one-time render. Cache is enabled by default for ShaderFill and disabled by default for ShaderWrapper.

:::tip

Enable Cache when a static or slow-moving shader sits inside a frequently repainting parent, such as a scrolling or otherwise animated layout. It may not help when the shader itself is the main source of per-frame updates, so test on representative devices.

:::

## Custom Shaders

Custom Shaders allow you to create fully custom visual effects by uploading your own `.frag` (fragment shader) file. This gives you complete control over how pixels are rendered.

Here’s how to add a custom shader:

1. Create a Flutter-compatible `.frag` fragment shader. You can ask an AI assistant to draft it or start from an [existing Flutter shader](https://github.com/FlutterFlow/material_palette/blob/main/lib/shaders/perlin_gradient.frag). For example:

    ```
    Create a Flutter-compatible GLSL .frag shader for a soft animated
    onboarding background. Use Flutter runtime-effect syntax. Declare uSize
    first and uTime second, followed only by float-based uniforms. Return the
    complete shader and explain the required FlutterFlow uniform order.
    ```

2. Upload the `.frag` file with the **Shader Asset** picker. Custom shaders must be local, build-compiled assets; a network URL cannot be used as the shader asset.
3. Use **Add Uniform** once for every additional float slot your shader declares. Each entry accepts or binds a Double value from 0 through 10.
4. Run or test the app to compile and view the effect.

In the builder, a custom ShaderFill displays a placeholder. A custom ShaderWrapper leaves its child visible without applying the custom effect.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/uTnN9k6o22rVN0g25Wde?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

### Adding Uniforms

Uniforms are simply input parameters that you pass to a custom shader. In FlutterFlow, they appear as sliders in the UI, similar to how you adjust settings (like speed, colors, or intensity) in preset shaders.

#### Required float-uniform order

FlutterFlow binds float uniforms by position, not by name. Your shader must declare this prefix before its custom float uniforms:

```glsl
uniform vec2 uSize; // float slots 0 and 1: rendered width and height
uniform float uTime; // float slot 2: shader time
```

After that prefix, FlutterFlow sends the **Add Uniform** values in list order. For example:

```glsl
uniform vec2 uSize;
uniform float uTime;
uniform float speed;
uniform vec4 tint;
```

Configure the values in this sequence:

1. One **Add Uniform** entry for `speed`.
2. Four consecutive entries for `tint.r`, `tint.g`, `tint.b`, and `tint.a`.

![uniform](animation_gifs/uniform.avif)

:::warning
The names do not control binding. If the number or order of float slots differs, values reach the wrong uniforms and the shader may render incorrectly or fail.
:::

#### ShaderWrapper texture sampler

In addition to the float prefix, a custom ShaderWrapper needs an image sampler for its child texture. Declare the first sampler using the conventional name `uTexture`:

```glsl
uniform sampler2D uTexture;
```

FlutterFlow binds the rendered child image to sampler index 0. A ShaderFill has no child texture and does not require this sampler.

:::note

Uniform vectors occupy multiple float slots: `vec2` uses two, `vec3` uses three, and `vec4` uses four. FlutterFlow's custom-uniform controls provide Double values, so add one entry per slot.

:::

## Use Shadertoy Shaders

[Shadertoy](https://www.shadertoy.com/) hosts thousands of community-made GLSL fragment shaders such as animated backgrounds, glowing effects, liquid simulations, and more. Flutter supports custom fragment shaders through its `FragmentProgram` API, but Shadertoy shaders can't be dropped in directly: they use a different entry point, different uniform names, and several built-ins that Flutter doesn't recognize.

The [Shadertoy to Flutter skill](https://github.com/FlutterFlow/shadertoy_to_flutter_skill) helps convert Shadertoy GLSL into Flutter-compatible `.frag` shaders. It rewrites the shader structure, maps Shadertoy uniforms to Flutter uniforms, handles texture/audio channels where possible, and produces a `.frag` file that can be uploaded into your FlutterFlow project.

**Step 1: Get the conversion skill**

Open the [`shadertoy-to-flutter` repository](https://github.com/FlutterFlow/shadertoy_to_flutter_skill) and follow its current README. Keep `SKILL.md` together with its `references` and `scripts` directories; those files contain the Flutter GLSL constraints, uniform mappings, templates, and validation workflow.

If your AI agent supports packaged `SKILL.md` instructions, install or add the repository using that agent's current supported mechanism. Product menus and commands change, so use the agent vendor's current documentation rather than relying on a copied UI sequence. If installation is unavailable, attach the repository files to the conversation and explicitly ask the agent to follow `SKILL.md`.

**Step 2: Ask the agent to convert the shader**

Provide either a Shadertoy URL or a local `.glsl` file. Explicitly ask the agent to use the `shadertoy-to-flutter` instructions and to report whether it produced a ShaderFill or ShaderWrapper shader.

**Option A: Convert a Shadertoy URL**

In the prompt, provide the Shadertoy URL and ask to convert into `.frag` file, for example:

```
Use the shadertoy-to-flutter skill to convert this Shadertoy shader into a
Flutter .frag file. Validate the result and list its FlutterFlow uniforms in
binding order:
[shadertoy-url]
```

![convert-via-url.avif](imgs/convert-via-url.avif)

**Option B: Convert a Local .glsl File**

Open the Shadertoy shader you want to use, copy the shader code, and save it as a `.glsl` file. Then attach the file and use a prompt such as:

```
Use the shadertoy-to-flutter skill to convert the attached file into a Flutter
.frag file. Validate the result and list its FlutterFlow uniforms in binding
order.
```

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/b9lZQ81Fq3tHpq5N50Z6?embed&show_copy_link=true" title="Shaders interactive tutorial"
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

:::tip

You can also paste the shader code directly into the prompt, for example:

```
Use the shadertoy-to-flutter skill and convert this shader to a Flutter .frag
file. Validate the result and list its FlutterFlow uniforms in binding order:

[paste shader code]
```

:::

**Step 3: Upload the `.frag` file**

Upload the generated file with the **Shader Asset** picker, reproduce the reported custom values with [Add Uniform](#adding-uniforms), and run the app. If compilation or rendering fails, give the exact error and generated file back to the agent for another validation pass.

### Best Practices

- Keep the generated `.frag` file unchanged unless you know GLSL well.
- Always check the uniform order before wiring values in FlutterFlow or Dart.
- Prefer ShaderFill when the effect does not need to sample existing UI.
- Use wrap shaders only when the shader needs an image, scene, or app UI texture.
- Avoid adding extra uniforms unless you really need user control.
- Test animation smoothness and memory use on representative low- and high-end devices. Shader cost depends on resolution, frame rate, effect complexity, and target GPU.
- Do not use motion, distortion, or color alone to communicate essential state. Provide a readable static state or another accessible cue when the effect is unavailable or unsuitable.

### Troubleshooting custom shaders

| Symptom | What to check |
| --- | --- |
| The app reports a shader compilation error | Confirm Flutter runtime-effect syntax and unsupported GLSL features against the conversion skill references. Give the complete compiler message to the agent that generated the file. |
| The effect renders with incorrect values | Confirm `uSize`, then `uTime`, then every custom float slot in exact order. A vector needs one FlutterFlow entry per component. |
| A ShaderWrapper renders no child content | Confirm the shader declares a sampler and samples the child texture bound at sampler index 0. |
| The custom effect does not appear in the builder | This is expected. Use Test or Run mode; ShaderFill shows a placeholder and ShaderWrapper shows its unmodified child in the builder. |
| A touch effect does not advance | Use a preset that supports **Interactive**, enable it, and set time behavior to **Continuous**. |
| A Shader Animation action appears to do nothing | Select a shader on the same page or component, use an animating configured mode, and run **Start Animation**. The action is not available in Action Blocks. |
