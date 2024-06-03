---
title: Getting Started
---


# GitHub

You can connect your project to your [GitHub](https://github.com/) account and push your entire Flutter codebase to a GitHub repository.

<figure>
    ![img.png](imgs%2Fimg.png)
  <figcaption class="centered-caption">Github Settings</figcaption>
</figure>

## Connect a GitHub repo

1. Go to your GitHub account, create a new repo by clicking on the "**+**" button in the top-right corner and select **New repository**.

<figure>
   ![img_1.png](imgs%2Fimg_1.png)
  <figcaption class="centered-caption">Create new repository</figcaption>
</figure>

2. Enter the repository name and fill up other descriptions. We recommend creating a [**private repository**](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)**.** Don't keep the repo empty, select **Add a README file**. Click **Create repository**.

:::tip
If you keep the repository empty then it would not be initialized as there's no **main** branch. So, FlutterFlow would not be able to upload your project there.
:::

<figure>
    ![ff_github_private.gif](ff_github_private.gif)
  <figcaption class="centered-caption">Enter Repository Details</figcaption>
</figure>

3. Once the repo is created, go back to the **Settings and Integrations** page and move to Step 2. Click on the link present there to open the [FlutterFlow GitHub App](https://github.com/apps/flutterflow-github-app) page.

<figure>
    ![img_3.png](imgs%2Fimg_3.png)
  <figcaption class="centered-caption">FlutterFlow Github App</figcaption>
</figure>

Click **Install** and select the account to install on.

![img_4.png](imgs%2Fimg_4.png)

4. Choose **Only select repositories** and select the repo name that you created in Step 2 from the dropdown. Click **Install**.

![img_5.png](imgs%2Fimg_5.png)

5. Now, go back to the **Settings and Integrations** page and move to Step 3. You just have to copy the GitHub repository URL that you created and paste it into the **Full Repository URL** text field.

![img_6.png](imgs%2Fimg_6.png)

6. Click **Associate Repo**.

<figure>
    ![img_7.png](imgs%2Fimg_7.png)
  <figcaption class="centered-caption">Associate Github Repo</figcaption>
</figure>


7. You will notice that a new button will appear, called **Push to Repository**. Click on it. This will open up a new popup. Enter the **Git Commit Message** and click on **Push**.

:::tip
The Git Commit Message should summarize the changes made in the FlutterFlow project. It helps you recall changes in the future. For example, Update app title, Add push notification, Add todo search, etc.
:::

<figure>
    ![img_8.png](imgs%2Fimg_8.png)
  <figcaption class="centered-caption">Enter commit message and push to repository</figcaption>
</figure>


The uploaded code on a new branch **flutterflow** looks like this:

<figure>
    ![img_9.png](imgs%2Fimg_9.png)
  <figcaption class="centered-caption">Code Uploaded to Github</figcaption>
</figure>

## FAQ

<details>
<summary>How to make local changes so they won't be overwritten with your next push from 
FlutterFlow?</summary>

You can find the step-by-step guide for managing the custom code [here.](/customizing-your-app/manage-custom-code-in-github)

Here are a few tips and tricks:

* FlutterFlow pushes any changes to a branch called **flutterflow**, it doesn't modify anything present inside your other branches.
* You should not make any direct changes to the **flutterflow** branch.
* If you want to make any modifications to the code should be made in a **different branch (e.g. main branch).**
* That way the next time you push from FlutterFlow, it will overwrite the FlutterFlow branch. You 
  can merge these changes into your main branch.
</details>



