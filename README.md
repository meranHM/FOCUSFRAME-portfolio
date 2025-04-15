# FocusFrame – Developer/Photographer Portfolio Template

**FocusFrame** is a modern, minimal, and highly customizable portfolio template built with **React**, **TypeScript**, and **Tailwind CSS**. It was designed with photographers, visual creatives, and developers in mind, aiming to strike the perfect balance between simplicity and visual impact.

Whether you're showcasing your photography, web projects, or case studies, FocusFrame offers a beautiful and responsive experience across all devices.

---

## 🌟 Features

- ⚡️ **Built with React + TypeScript**
- 🎨 **Responsive Design** – mobile-first, pixel-perfect layout
- 🌗 **Dark & Light Theme** – toggled by system preference or manual switch
- 🖼️ **Masonry Grid Lightbox Gallery** – with fullscreen and download options
- 🔖 **Tag-based Filtering with Deep Linking** – tags are synced in the URL
- ❌ **"No Results" State** – for unmatched filter queries
- 💬 **Contact Form** with:
  - Email validation
  - Submission feedback
  - Spam Honeypot Protection
- ♿️ **Accessibility** – keyboard nav, focus rings, ARIA labels, screen-reader friendly
- 🔁 **Smooth Scroll to Top** button
- 💻 **Framer Motion Animations** – subtle fade/slide effects
- ✨ **Clean, Semantic HTML** – optimized for SEO and screen readers
- 📁 **Well-structured Codebase** – easy to extend and customize

---

## 🖼 Preview

![FocusFrame Preview](https://your-preview-image-url.com)

---

## 🛠️ Tech Stack

- **Framework:** React 19, TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Form Handling:** Native HTML + Custom Error States
- **Lightbox:** Custom-built component
- **Icons:** React Icons

---

## 📁 Project Structure
```
src/ ├── assets/ # Images and icons 
     ├── components/ # Page sections (Hero, About, Portfolio, Contact, Footer) 
     ├── constants/ # Static data (data, tags, icons) 
     ├── App.tsx # Main layout 
     ├── index.tsx # Entry point 
     └── index.css # Tailwind CSS setup
```
---

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/meranHM/FOCUSFRAME-portfolio.git
cd focusframe
```

### 2. Install Dependencies

```
npm install
# or
yarn install
```

### 3. Run the Development Server

```
npm run dev
# or
yarn dev
```
- Open http://localhost:5173 in your browser.

---

## ✍️ Personalizing the Template
To make FocusFrame your own, follow these steps:

### 🧑‍🎨 1. Replace Personal Info
Update your name, bio, social links, and contact details in:
```src/constants/index.ts```

### 🖼️ 2. Replace Portfolio Images
To replace images:
- Simply drop your `.webp`, `.jpg`, or `.png` images into `src/assets/images/`
- The template will automatically import them.
- Add another object in the photos array and update its data accordingly.
- You can update titles, descriptions, tags, and EXIF data in `src/constants/portfolioGallery.ts`


### 🌐 3. Update SEO Metadata (Optional)
Edit index.html or use React Helmet for dynamic meta tags.

### ✉️ 4. Set Up the Contact Form
- Connect it to services like Formspree or EmailJS

- Or replace the submission handler with your backend endpoint.
**The form includes spam protection (honeypot field) and validation for better deliverability.**

---

## 📦 Build for Production
```
npm run build
# or
yarn build
```
---

## 🌈 Customization Tips
- Modify Tailwind theme colors in tailwind.config.js

- Add/remove sections easily inside App.tsx

- Icons are pulled from react-icons (e.g., Feather, Lucide)

- Lightbox and filter system are fully reusable — feel free to extend!

 ## 🙏 Credits
- Photos used in preview are for demo purposes only.

- Icons via Lucide and React Icons

- Fonts via Google Fonts

- Animations powered by Framer Motion

---

## 📃 License
This template is licensed for personal and commercial use. You can use it in client projects, personal portfolios, or product showcases.

**You may not redistribute or resell the template as-is without purchasing an extended license.**

## 💬 Support
If you run into any issues or want help customizing this template, feel free to reach out via **mehranshahani6@gmail.com**.

---

Made with care by Mehran Shahani