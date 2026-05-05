---
slug: /designer/welcome
title: Welcome
description: Discover FlutterFlow Designer—the fastest way to design apps. Explore its key features, understand how it works, and start designing your first app with ease.
tags: [FlutterFlow Designer, FlutterFlow, Design]
sidebar_position: 0
keywords: [flutterflow designer, ai app design, screen storyboard generation, ui design tool]
hide_title: true
hide_table_of_contents: false
---

import InfoCard from '@site/src/components/InfoCard';
import InfoCards from '@site/src/components/InfoCards';

<div style={{ padding: '32px 0 16px' }}>
  <h1 style={{
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: 0,
  }}>
    Craft your intent on the canvas.<br/>
    Bring the cost of design iteration to zero.
  </h1>
  <p style={{
    fontSize: '1.125rem',
    lineHeight: 1.6,
    color: 'var(--ifm-color-emphasis-700)',
    maxWidth: '640px',
    marginTop: '20px',
  }}>
    <a href="https://designer.flutterflow.io/"><strong>FlutterFlow Designer</strong></a> provides the fastest UI generation in the world, without sacrificing quality or control integrated with agents for a seamless design-to-code experience.
  </p>
</div>

<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '3rem',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
}}>
    <iframe
        src="https://www.youtube.com/embed/NhH8j169voo"
        title="FlutterFlow Designer Demo"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>

## Get started

<InfoCards>
    <InfoCard
      icon="🚀"
      iconBg="#FFE5D9"
      title="Quickstart"
      description="Generate your first app design from a simple text prompt and export it in just a few steps."
      pagePath="/flutterflow-designer-quickstart"
      fullWidth={true}
      tags={["Prompting", "Style exploration", "Export"]}
    />
    <InfoCard
      icon="🧭"
      iconBg="#E0EAFF"
      title="Tour the workspace"
      description="Get familiar with the panels, canvas, and tools that make up the Designer environment."
      pagePath="/workspace"
      fullWidth={true}
      tags={["Canvas", "Panels", "Theme", "Components"]}
    />
</InfoCards>

<p></p>

## Explore the Designer

<InfoCards>
    <InfoCard
      icon="🧩"
      iconBg="#DCFCE7"
      title="Components"
      description="Build reusable UI blocks with variants and parameters to keep your design system consistent across screens."
      pagePath="/components"
      fullWidth={true}
      tags={["Reusable UI", "Variants", "Parameters", "Has expression"]}
    />
    <InfoCard
      icon="📥"
      iconBg="#FEF3C7"
      title="Import & Export"
      description="Bring existing FlutterFlow screens into Designer or hand off designs back to FlutterFlow, PNG, or agent-ready prompts."
      pagePath="/import-export"
      fullWidth={true}
      tags={["Import", "Export to FlutterFlow", "PNG", "Agent prompts"]}
    />
    <InfoCard
      icon="🤖"
      iconBg="#FFE4E6"
      title="Integrations"
      description="Integrated with agents for a seamless design-to-code experience. Connect Designer with Claude, Gemini, and other AI tools to edit designs in natural language."
      pagePath="/integrations"
      fullWidth={true}
      tags={["Claude", "Gemini", "MCP", "Natural language editing"]}
    />
</InfoCards>

<p></p>

FlutterFlow Designer empowers both non-technical creators and development teams to move faster during early UX and UI exploration, then hand off straight to code.
