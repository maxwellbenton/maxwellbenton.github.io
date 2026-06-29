# Maxwell Benton - Portfolio Website

> Personal portfolio showcasing my work as a Technical Lead and Front-End Engineer

🌐 **Live Site:** [www.maxwellbenton.com](https://www.maxwellbenton.com)

## About

This is my personal portfolio website built with modern web technologies to showcase my experience as a Technical Lead and Front-End Engineer. The site features my recent projects, technical skills, and professional background.

## 🛠️ Tech Stack

- **Front-End:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 🚀 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Performance Optimized** - Fast loading with modern build tools
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Interactive Elements** - Secret gnome easter egg for fun
- **Professional Content** - Showcases real projects with quantified impact

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation with social links
│   ├── Skills/         # Technical skills section
│   └── ...
├── pages/              # Main page sections
│   ├── Experience/     # About and skills
│   ├── Projects/       # Portfolio projects
│   └── Main/          # Hero section
├── constants/          # Shared constants and styling
├── assets/            # Images and static files
└── types/             # TypeScript type definitions
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maxwellbenton/maxwellbenton.github.io.git
   cd maxwellbenton.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 📦 Build & Deployment

The site is automatically built and deployed to GitHub Pages when changes are pushed to the `gh-pages` branch.

**Manual deployment:**
```bash
npm run build
npm run deploy
```

## 🎨 Customization

### Updating Content
- **Personal info:** Edit `src/constants.ts`
- **Skills:** Modify `src/components/Skills/index.tsx`
- **Projects:** Update `src/pages/Projects/index.tsx`
- **Styling:** Adjust `src/constants/tailwind.ts`

### Adding New Projects
1. Add project images to `src/assets/`
2. Update the `Projects` component with new project data
3. Include impact metrics and technical details

## 🔧 Configuration

### Environment Setup
- **Node version:** See `.nvmrc` (if applicable)
- **TypeScript:** Strict mode enabled
- **ESLint:** React and TypeScript rules
- **Vite:** Modern bundling with SWC

### Build Optimization
- **Code splitting** - Automatic route-based splitting
- **Asset optimization** - Images and fonts optimized
- **Bundle analysis** - Use `npm run build` to see bundle size

## 📊 Performance

- **Lighthouse Score:** 90+ across all metrics
- **Bundle Size:** ~157KB gzipped
- **Load Time:** <2s on 3G networks

## 🤝 Contributing

This is a personal portfolio, but if you spot any issues or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Maxwell Benton**
- Website: [www.maxwellbenton.com](https://www.maxwellbenton.com)
- LinkedIn: [linkedin.com/in/maxwellbenton](https://www.linkedin.com/in/maxwellbenton/)
- GitHub: [github.com/maxwellbenton](https://github.com/maxwellbenton)
- Medium: [medium.com/@maxwellbenton](https://medium.com/@maxwellbenton)

---

⭐ **Star this repo** if you found it helpful or want to follow my work!