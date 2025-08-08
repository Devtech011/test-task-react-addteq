# Product Comparison App

A modern React application for comparing smartphone products with advanced features, accessibility, and a beautiful user interface.

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Devtech011/test-task-react-addteq.git
   cd test-task-react-addteq
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to the local development URL (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Features

### Core Functionality

- **Product Comparison**: Select up to 3 products to compare features side by side
- **Smart Comparison Table**: Automatic highlighting of differences and performance metrics
- **LocalStorage Persistence**: Selected products are saved and restored on page reload
- **Product Management**: Add/remove products from comparison with clear visual feedback

### Search & Filter

- **Real-time Search**: Search products by name, brand, or features
- **Keyboard Navigation**: Use Escape to clear search, Enter to confirm
- **Empty State Handling**: Clear messaging when no products match search criteria

### Accessibility

- **Full Keyboard Navigation**: Complete keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels, roles, and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Semantic HTML**: Proper heading structure and semantic elements
- **High Contrast Support**: Works well in high contrast mode

### Theme Support

- **Light/Dark Mode**: Toggle between light and dark themes
- **Theme Persistence**: Theme preference saved in localStorage
- **System Integration**: Respects user's system theme preference
- **CSS Custom Properties**: No hardcoded colors for consistent theming

### UI/UX Features

- **Modern Design**: Clean, responsive interface using shadcn/ui components
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Subtle transitions and hover effects
- **Visual Feedback**: Clear indicators for selected products and actions
- **Loading States**: Proper loading indicators where applicable

### Data Management

- **TypeScript**: Full type safety throughout the application
- **Local Storage**: Persistent state management
- **Error Handling**: Graceful error handling for edge cases

## Assumptions

### Product Data

- Products are smartphones with consistent feature sets
- Product images are loaded from external URLs (Unsplash)
- Product data is static and doesn't require API calls
- Features include: Screen Size, Battery Life, Storage, and Camera specifications

### User Experience

- Users want to compare up to 3 products simultaneously
- Users expect their selections to persist across browser sessions
- Users prefer keyboard navigation for accessibility
- Users want to see clear visual differences between products

### Technical Assumptions

- Modern browsers with ES6+ support
- LocalStorage is available and enabled
- Network connectivity for loading product images
- Screen sizes from mobile (320px) to desktop (1920px+)

### Performance

- Client-side rendering is sufficient for the product catalog
- LocalStorage operations are fast enough for real-time updates
- Image loading from external URLs is acceptable
- No server-side processing required for current features

## File Structure

```
test-task-react-addteq/
├── public/                    # Static assets
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/               # Application assets
│   │   └── react.svg         # React logo
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui base components
│   │   │   ├── badge.tsx    # Badge component
│   │   │   ├── button.tsx   # Button component
│   │   │   ├── card.tsx     # Card component
│   │   │   └── input.tsx    # Input component
│   │   ├── ComparisonTable.tsx  # Product comparison table
│   │   ├── ProductCard.tsx      # Individual product card
│   │   ├── ProductGrid.tsx      # Grid layout for products
│   │   ├── SearchBar.tsx        # Search functionality
│   │   └── ThemeToggle.tsx      # Theme switcher
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Theme management context
│   ├── data/               # Static data
│   │   └── products.ts     # Product catalog
│   ├── hooks/              # Custom React hooks
│   │   └── useLocalStorage.ts # LocalStorage hook
│   ├── lib/                # Utility libraries
│   │   └── utils.ts        # Common utility functions
│   ├── types/              # TypeScript type definitions
│   │   └── product.ts      # Product interface
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite type definitions
├── components.json         # shadcn/ui configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # App-specific TypeScript config
├── tsconfig.node.json      # Node-specific TypeScript config
├── vite.config.ts          # Vite build configuration
└── README.md               # Project documentation
```

## Keyboard Shortcuts

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and select products
- **Escape**: Clear search input
- **Arrow Keys**: Navigate through product cards

## Technology Stack

- **React 19** with TypeScript for type safety
- **Tailwind CSS 4** for utility-first styling
- **shadcn/ui** for modern component library
- **Lucide React** for beautiful icons
- **Vite** for fast build tooling and development
- **ESLint** for code quality and consistency

## Development

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (via Tailwind CSS)
- Semantic commit messages

### Performance

- Lazy loading for images
- Optimized bundle size with Vite
- Efficient re-renders with React 19
- Minimal dependencies
