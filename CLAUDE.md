# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**@dimaslz/ng-heroicons** - Angular component library wrapping [Heroicons](https://heroicons.com/) SVG icons. Monorepo supporting Angular versions 11-19, each as a separate package. All icon components are **auto-generated** from the upstream Heroicons repository -- do not manually edit icon component files.

## Architecture

### Monorepo Layout (no Yarn workspaces)

- `packages/angular-v{11-19}/` - Isolated Angular packages, each with own `node_modules`
- `generator/` - Node.js ES module scripts that clone Heroicons, compress SVGs via SVGO, and generate Angular components from templates
- `assets/` - **Gitignored, auto-generated** output from the generator (icon components, playground templates)
- `landing/` - Angular 18 demo website
- `release/` - Release automation scripts (version bumping, npm publishing, git tagging)
- `dist/` - Build output per version (`dist/v11/`, `dist/v19/`, etc.)

### Icon Generation Pipeline

`generator/index.mjs` clones `tailwindlabs/heroicons`, extracts 24px outline/solid SVGs, compresses them with SVGO, and generates Angular components using templates in `generator/*.tpl.txt`. Each icon gets two variants: outline (with stroke input) and solid. Components use `standalone: false` (NgModule pattern) and `OnPush` change detection.

### Per-Package Structure

Each `packages/angular-vXX/` contains:
- `projects/lib/` - The publishable library (ng-packagr)
- `projects/playground/` - Demo app for local testing
- `projects/lib/components/{common,outline,solid}/` - Generated icon components (gitignored)

## Build & Development Commands

Package manager: **Yarn 1.x** (`yarn@1.22.22`)

### Initial Setup
```bash
yarn install
yarn generate              # Generate icon components (clones Heroicons repo on first run)
yarn generate --c          # Force re-clone Heroicons
yarn generate --v=v19      # Generate for specific version only
yarn generate --l=50       # Limit to 50 icons (for faster dev iteration)
```

### Per-Version Development (replace `v19` with target version)
```bash
yarn --cwd=packages/angular-v19 install          # Install deps for a specific version
yarn v19-copy-assets                              # Copy generated components into package
yarn --cwd=packages/angular-v19 start playground  # Dev server at localhost:4200
yarn build:v19                                    # Production build
yarn v19-copy-release                             # Copy build output to dist/v19/
```

### Testing
```bash
cd packages/angular-v19 && yarn test    # Run Jest tests for v19
cd packages/angular-v14 && yarn test    # Older versions (uses TS_JEST_DISABLE_VER_CHECKER=true)
yarn --cwd=landing test                 # Landing page tests
```

Test stack: Jest 29 + jest-preset-angular + @testing-library/angular

### Linting
```bash
cd packages/angular-v19 && yarn lint       # ESLint check
cd packages/angular-v19 && yarn lint:fix   # Auto-fix
```

ESLint config: `@typescript-eslint` + `@angular-eslint` + Prettier. 140 char line length, 2-space indent, single quotes, semicolons required.

### Bulk Operations
```bash
yarn update-projects    # Clean + copy assets for all versions (v11-v18)
yarn build:prod         # Build all versions
yarn copy-releases      # Copy all build outputs to dist/
yarn clean-projects     # Clean all packages
```

Note: Bulk scripts currently cover v11-v18. v19 commands must be run individually.

### Release
```bash
yarn release -v=v19        # Release specific version
yarn release -v=v19 -u     # With Heroicons update
yarn release -v=v19 -p     # With npm publish
yarn release -v=v19 -r     # Full release (vs release candidate)
```

## Key Constraints

- Icon component files under `projects/lib/components/` are **generated** -- modify templates in `generator/` instead
- Each Angular version package is fully isolated (separate `node_modules`, TypeScript version, Angular CLI version)
- Components use `standalone: false` across all versions including v19
- The `assets/` and `heroicons/` directories are gitignored and recreated by the generator
- CI tests different Node.js versions per Angular version (e.g., v18 uses Node 20+22, v12 uses Node 14+16+18)
