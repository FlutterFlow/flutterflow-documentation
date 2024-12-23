---
slug: /deployment/web-publishing
title: Web Publishing
description: Discover how to effortlessly publish your applications on the web with FlutterFlow. This guide covers everything from enabling web support to deploying your app and adding custom domains.
tags: [Web Publishing, Deployment]
sidebar_position: 2
keywords: [Web Publishing, Deployment, FlutterFlow, Custom Domains]
---

# Web Publishing

FlutterFlow supports web publishing, allowing you to build and publish web applications in addition to your mobile apps. This guide provides details on how to use FlutterFlow for web publishing. From enabling web support and making design adjustments to deploying your app and adding custom domains.

:::info

- You can ship your existing mobile app as a web app with little or no change to the current setup.
- We offer free hosting and custom subdomains for all users.
- We've rebuilt some of the components to work better on the web.

:::

## Publish to Web

Publishing to the Web comprises of the following steps:

1. [Enabling web support](#1-enabling-web-support)
2. [Make design adjustments (optional)](#2-make-design-adjustments-optional)
3. [Resolving errors](#3-resolving-web-compatibility-warnings)
4. [Adding general information](#4-adding-general-information)
5. [Deploy](#5-deploy)
6. [View live web app](#6-view-live-web-app)

### 1. Enabling web support

By default, FlutterFlow allows you to run your app on *Android* and *iOS* without any additional effort. But, to run and deploy your app on the *Web*, you need to add platform support for the Web.

To add platform support, navigate to the **Setting and Integrations > Project Setup > Platform >** turn on the **Web** toggle.

![enable-web](../imgs/enable-web.avif)

#### Advanced Web Settings

1. **Use Original Engine Initialization**: This uses original Flutter web engine initialization, which sometimes helps in better loading time in the deployed web app.

2. **Use CanvasKit**: Enabling this option can provide high-quality graphics and text rendering on web platforms. **Note** that when using CanvasKit, some images can be blocked from loading if the server is not configured to allow loading them from other websites. To deal with this issue, you can set any of the following options, depending on where the images are hosted.
    - **None:** If you are only loading images from your Firebase Storage, select this option and follow the steps [here](#). <!--pinkesh add link-->
    - **Deploy with Firebase**: If images are not hosted on Firebase Storage *but you use Firebase to build your app*, choose this option and hit Deploy button.
    - **Custom Proxy URL**: If you are not using Firebase or prefer to set up your own CORS proxy, you can specify your own Custom Proxy URL. If you don't have one, you can create one by following the steps [here](https://github.com/Rob--W/cors-anywhere).
3. **Import Emoji library**: Importing the Emoji library is necessary if your app may use emojis anywhere in any text widget. However, this will increase the size of your app on web.

:::info

Enabling web support automatically enables 
[**deep linking**](../../ff-concepts/navigation-routing/deep-dynamic-linking.md) for your project. This helps in creating URLs for every page of your app.

:::

### 2. Make design adjustments (optional)

If you're creating a web-only application, setting the canvas size to desktop and building pages accordingly can work well. However, if you plan to target both mobile and web users, some design adjustments may be necessary to ensure that the UI is optimized for both platforms.

You can create separate widgets for different platforms and control their visibility using [Responsive Visibility](../../ff-concepts/layout/responsive-layout.md#responsive-visibility).

### 3. Resolving web compatibility warnings

If you have previously built a mobile app and have recently enabled web support, you may encounter warnings regarding web compatibility. Due to the distinct nature of mobile and web platforms, some of the widgets and actions in FlutterFlow, including [AdMob](../../ff-integrations/ads/admob.md), [RevenueCat](../../ff-integrations/payments/revenuecat.md), [Share](../../ff-concepts/navigation-routing/share-action.md) action, and [Launch Map](#) action, or your custom widgets may not function as expected because they are not yet supported on the web.

Any known *Web Support* Issues will be displayed as a **Platform Support Warning**. This won't stop you from deploying your app to the web, but it can result in poor user experience and unexpected app behavior.

![platform-warnings](../imgs/platform-warnings.avif)

In such a situation, you can try to find a replacement package on [pub.dev](https://pub.dev/) (considering it meets your requirements and has a good score).

:::warning

**Important**: Make sure to double-check any *pub.dev* packages you are using have *Web* Support.

![web-support](../imgs/web-support.avif)

:::

### 4. Adding general information

In this step, you must provide general information about your web app by following the steps below:

1. Navigate to the **Setting and Integrations >** **App Settings >** **Web Deployment**.

![web-pub-general-settings](../imgs/web-pub-general-settings.avif)

Inside the **General Information** section, enter the following details:
- **Site URL**: You can define the *Site URL* by adding the subdomain, for example, *mywebapp.flutterflow.app*. You can only change the subdomain, i.e., the part before *flutterflow.app*.
    
    :::warning
    - You can remove or change the existing subdomain by simply entering the new one and hitting the publish button. Note that when you change your subdomain, it only takes effect the next time you deploy.
    - Old addresses can stop working anytime and be given to another user.
    - There is a limit on the number of subdomains you can register per user. *Paying users can register up to 20 subdomains*. You will receive an in-app warning if you are approaching the limit.
    :::
    
- **SEO Title**: This appears in social sharing previews and search results.
- **Site Description**: A text that you would like to appear in the social sharing preview card and search results.
- **Page Title**: This appears in the browsers tab for all pages of your app.
- **Favicon**: An icon that typically appears before the web app name inside the browser's tab. To change it, click on the **Upload Favicon +** and upload the icon. You can generate it for free from [here](https://favicon.io/).
- **Status Bar Color**: This is to change the status bar color when viewed on the Safari browser on iOS and installed as a PWA on mobile devices.
- **Social Share Image URL**: The image from this URL will be displayed inside the social share preview card (e.g., OpenGraph and Twitter card).
- **Individual Page Titles**: Enabling this will display the current page name in the browser tab. If you do so, ensure you provide the **Page Title** under **Page > Properties Panel > Route Settings**.
- **Show Watermark**: By default, a button with 'Built in FlutterFlow' text appears as a watermark at the bottom right side of your page. To remove, disable the **Show watermark** toggle.
- **Allow Showcasing**: If enabled, we may feature your project on our website.
- **Allows Search Engine Indexing**: This is to let people discover your site via search engines.
- **Enabling PWA**: Enabling this can provide an app-like experience right in the browser. PWA app can be installed on the device, supports offline functionality, sends push notifications, and can be accessed without the need to go through an app store.
- **Use CanvasKit**: Enabling this can provide high-quality graphics and text rendering on web platforms. CanvasKit can be used as an alternative to the default HTML renderer when higher graphical fidelity is needed in Flutter web apps.
- **Use Original Engine Initialization**: This uses original Flutter web engine initialization, which sometimes helps in better loading time in the deployed web app.

:::info

Tip: Only *Standard*, *Pro*, and *Teams* users can remove the FlutterFlow watermark.

:::

### 5. Deploy

When you are ready to deploy, click **Publish.** This will take approximately 2-3 minutes.

![publish-button](../imgs/publish-button.avif)

By default, you will publish to a subdomain based on your project id. These default subdomain addresses do not count toward the subdomain quota, and you can deploy as many projects as you'd like. The URL would look like this: `your-project-id-1234.flutterflow.app`

You can also modify the address by specifying a custom subdomain address, in the **Settings > Web Publishing** tab's **Site URL** field, as long as it's available. You can have up to **3** custom subdomain URLs on the Free plan, and up to **20** custom subdomain URLs on any of our Paid plans.

:::info

Once it is published, you can make any changes live to your users by clicking the **Publish** button again.

:::

If you try to publish to a domain that is already taken, you will receive a warning like ‘*Error reserving subdomain: Subdomain `your-domain-name` is already used by another project.*’ To overcome this, enter a different subdomain inside the **Site URL** and select **Publish** again.

:::info

In case you want to unroll your web app, hit the **Unpublish** button at the bottom.

:::

### 6. View live web app

To view the live version of your app, click the **eye icon** next to the 'Publish' button.

![view-published-site.avif](../imgs/view-published-site.avif)

---

## Adding custom domain

Adding a custom domain to your web app can give it a more professional look and feel and make it easier for your users to remember and find. FlutterFlow allows you to connect your own domain name to your web app and have it up and running in no time. This feature is perfect for those wanting to establish a strong online presence and increase brand awareness.

:::info[Important]

- Only *Pro* and *Teams* plans include **one** free custom domain. The *Teams* plan comes with one custom domain for the whole team. If you are on the *Standard* plan, you will need to purchase a custom domain, as it is not included in the plan for free.
- Only paid plans can purchase domains. *Standard* and *Pro* users can buy from their *Account* page, and Teams owners can buy it from **[My Organization](../../resources/projects/how-to-collaborate-on-projects.md#sharing-a-project-with-an-organization)**.
- A single custom domain slot can be linked to only one domain or subdomain.
- You can connect only one domain to a project, which can be either a root domain (like 'myapp.com') or a subdomain (such as 'beta.myapp.com'). That means if you connect a root domain, none of the subdomains under it will connected to the project. This leads to the rule of '*One project => One domain OR subdomain'*.

:::

To add a custom domain:

1. Enter your **Custom Domain URL**. Ensure you only enter the domain name (without www) and extension (e.g.,*mywebapp.com* and not *www.mywebapp.com*).
2. Now, you must set up the DNS. To do so:
    1. Visit the website from where you bought the domain.
    2. Open the DNS manager and create the records as per displayed in UI. **Note** that there should not be other A or AAA records after adding this. Here are quick links on how to do this on popular domain-selling websites. 1) [Godaddy](https://in.godaddy.com/help/add-an-a-record-19238) 2) [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/) 3) [Google Domains](https://support.google.com/a/answer/2579934?hl=en). Here's an example of how it looks in Godaddy.
    ![custom-domain-listing.avif](../imgs/custom-domain-listing.avif)
    3. Click **Connect**.
    4. Once the domain is connected, hit the **Publish** button again.
    ![connect-custom-domain.avif](../imgs/connect-custom-domain.avif)

---

## Add custom headers

If you are familiar with HTML, you may set any additional headers (e.g., [style](https://www.w3schools.com/tags/tag_style.asp) and [script](https://www.w3schools.com/tags/tag_script.asp)) that you would like to be used in your published web app. For example, adding inline or external javascript. This will appear inside the head tag of your published app.

:::warning

These headers are used directly in the `index.html` of your site, so malformed headers may cause unexpected behavior (just as directly editing `index.html` would).

:::

To add a custom header, enter your tag inside the *Custom Headers* input box and publish the web app again.

:::info

You can verify the added custom header by opening the inspect element window (**Command+Option+i** on **Mac** or **F12** on **PC**) and finding your tag inside the head tag.

:::

![custom-header.avif](../imgs/custom-header.avif)

---


## Changing Firebase dynamic link

If you do web deployment and utilize Firebase dynamic links in your app, it's recommended that you update your Firebase Dynamic Links URL scheme. This adjustment is necessary to ensure shared links open correctly on the web. By doing so, your dynamic links will function properly for users across all platforms.

![update-firebase-dynamic-link.avif](../imgs/update-firebase-dynamic-link.avif)

---

## Adding subdomain as Authorized domain (Firebase)

If you are using *Firebase Authentication*, you must add your custom subdomain as an authorized domain in the [Firebase console](https://console.firebase.google.com/). Otherwise, social and phone sign-in will not work.

To enable your subdomain as an authorized domain:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/lT8TyH1hZARTobmthlwI?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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

---

## See deployment history

Deployment history is essential for maintaining transparency, accountability, and a clear understanding of how a web application has evolved over time. Each deployment entry in the history includes a timestamp indicating when the deployment occurred.

It also display the status of each deployment (e.g., successful, failed). This helps in quickly identifying whether a deployment was completed without issues.

Click **View Full History** to review the previous successful version.

![view-deploy-history.avif](../imgs/view-deploy-history.avif)
