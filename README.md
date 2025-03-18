# Frontend Source Code

## Project Overview

A modern web application built with cutting-edge technologies for optimal performance and developer experience.

### Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier, Husky

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (version 8 or higher)

To install pnpm globally:

```bash
npm install -g pnpm
```

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `pnpm dev`        | Starts development server    |
| `pnpm build`      | Builds for production        |
| `pnpm start`      | Runs production server       |
| `pnpm lint`       | Runs ESLint checks           |
| `pnpm format`     | Formats code with Prettier   |
| `pnpm check:type` | Runs TypeScript checks       |
| `pnpm check`      | Runs all code quality checks |

## Project Structure

```
src/
├── app/              # App router pages and layouts
│   ├── (auth)/      # Authentication related routes
│   └── api/         # API routes
├── components/       # Reusable UI components
├── lib/             # Utility functions
└── styles/          # Global styles
```

## Development

### Code Quality

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Static type checking

### Environment Variables

Required environment variables:

```bash
NEXT_PUBLIC_API_URL=
DATABASE_URL=
NEXTAUTH_SECRET=
```

## Deployment

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Contributing

1. Create a feature branch
2. Commit changes
3. Push to the branch
4. Open a Pull Request

## License

This project is licensed under the MIT License.
