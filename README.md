# 📬 Setting Up the Contact Form

This template includes a working contact form that is already styled and structured with accessibility in mind. To make it fully functional, follow these simple steps:

##  Steps to Activate the Contact Form

1. **Sign Up for a Form Service**

   Go to [Formspree.io](https://formspree.io) or another form handling provider of your choice and create an account.

2. **Create a New Form**

   Follow your provider's instructions to create a new form and obtain your unique **endpoint URL**.

3. **Update the Endpoint in Your Code**

   Open the `ContactSection.tsx` file and replace the placeholder endpoint with your actual endpoint URL:

   ```tsx
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

4. **You're Done!**
    Once you've updated the endpoint, your contact form is ready to start receiving inquiries.