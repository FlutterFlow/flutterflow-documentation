---
keywords: ['could', 'embed', 'iframes']
author: Unknown
created_at: '1677842812'
slug: /could-we-embed-a-flutterflow-web-app-into-iframes
title: Could we embed a FlutterFlow web app into iFrames?
updated_at: '1678244479'
url: None
---

# Could We Embed a FlutterFlow Web App Into iFrames?

FlutterFlow web applications may not load correctly within **iframes** due to their reliance on **local storage**. However, it is possible to embed these apps within iframes by **enabling third-party cookies** from the subdomain where your FlutterFlow app is hosted.

![Iframe Behavior](../assets/20250430121251224097.png)

> ⚠️ **Important Notes:**
> 
> - While enabling third-party cookies may allow the application to load inside an iframe, **some features may not function as expected**.
> - Many modern browsers and reputable websites intentionally **block iframe embedding** for security reasons.

## Recommendation

If you decide to use this method, **test your embedded application thoroughly** to ensure that all necessary features work correctly.

