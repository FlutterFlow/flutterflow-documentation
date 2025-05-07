---
keywords: ['make', 'list', 'images']
author: Unknown
created_at: '1654081239'
slug: /make-an-image-slider-with-a-list-of-images
title: Make an image slider with a list of images
updated_at: '1654162922'
url: https://intercom.help/flutterflow/en/articles/6265402-make-an-image-slider-with-a-list-of-images
---
# Make an Image Slider with a List of Images

Create a dynamic image slider in FlutterFlow using a list of image URLs—perfect for e-commerce apps or any scenario where you want to display multiple images for an item.

---

## 1. Use Case Example

You have an e-commerce app and, on the item detail page, you want to show item images saved as a list of image URLs.

![](../assets/20250430121451497193.gif)

---

## 2. How It Works

- The **PageView** widget displays a horizontal slider of images.
- Children of PageView can be static (added one by one) or generated from a list.
- When generating from a list, you only need one child in the PageView; that child will repeat for each image in your list.

---

## 3. Project Example

- **Project URL:** [Open Project](Project URL)
- **Project Run:** [Run Project](Project Run)

---

## 4. How to Use This Project

1. On the login page, tap the **Login** button.
2. On the home page, tap **Image slider from list of images**.
3. You will navigate to the page **PhotoSlider**.

---

## 5. Implementation Steps

### 🖼️ Generate a List of Images
- Use sample data or your own list of image URLs.

### 📄 Add a PageView Widget
- Add a PageView widget to your page.
- Set its children to be generated from your list of images.

### 🔁 Repeat the Child Widget
- Use a single child widget inside PageView.
- Configure it to repeat for each image in your list.

---

> **Summary:**
> - Use PageView to create an image slider.
> - Generate children from a list of image URLs.
> - Only one child widget is needed; it will repeat for each image.

For more details, see the [official support article](https://intercom.help/flutterflow/en/articles/6265402-make-an-image-slider-with-a-list-of-images).

