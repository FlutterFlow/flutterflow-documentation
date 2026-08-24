---
slug: credit-card-form
title: Credit Card Form
tags: [Form Elements]
description: Learn how to add, use, and customize a Credit Card Form widget in your FlutterFlow app.
---

# Credit Card Form

The **Credit Card Form** widget lets users enter a card number, expiration date, and card verification value (CVV). Use it when accepting credit card payments through the [**Braintree integration**](../../../../ff-integrations/payments/braintree.md).

The form collects the card details required by the payment flow, but it does not process a payment on its own. To complete the transaction, use it with the **Braintree Payment** action.

:::warning[Sensitive payment information]
Do not store card numbers, expiration dates, or CVVs in app state, databases, logs, or analytics. Configure and process the payment through the [**Braintree payment workflow**](../../../../ff-integrations/payments/braintree.md).
:::

## Adding a Credit Card Form Widget

To add a Credit Card Form widget:

1. From **Form Elements** in the **Widget Palette**, add the widget listed as **CreditCardForm**.
2. Select the widget, then configure the following settings as needed in the **Properties Panel**.
    - **Obscure Card Number:** Controls whether the card number remains masked during entry.
    - **Obscure CVV:** Controls whether the CVV remains masked during entry.
    - **Line Spacing:** Sets the vertical space between the form's input rows.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/sezH4YZ9dUj58oVedQ3T?embed&show_copy_link=true"
        title="Add a Credit Card Form widget"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

<p></p>

## Using the Credit Card Form

To use the Credit Card Form:

1. Complete the [**Braintree setup**](../../../../ff-integrations/payments/braintree.md#1-setup-payments-integration) for your project.
2. Add the Credit Card Form and a checkout button to the same page.
3. Add the [**Braintree Payment**](../../../../ff-integrations/payments/braintree.md#3-trigger-payment-action) action to the button and select **Credit Card** as the payment method.

The Braintree Payment action uses the details entered in the form to process the transaction.
## Customizing the Credit Card Form Widget

### Text Style

Use **Text Style** to control the font, size, weight, color, and alignment of text in the card fields.

### Input Decoration Properties

- **Input Border Type:** Sets the border type to **Outline**, **Underline**, or **None**.
- **Filled:** Adds a background fill to the input fields.
- **Border Color:** Sets the border color.
- **Fill Color:** Sets the input background color when **Filled** is enabled.
- **Border Width:** Sets the border thickness.
- **Border Radius:** Rounds the field corners. Apply one value to all corners or configure each corner separately.
- **Content Padding:** Sets the left, top, right, and bottom spacing between the field content and its border.
- **Dense:** Reduces the vertical space used by the input fields for a more compact form.
