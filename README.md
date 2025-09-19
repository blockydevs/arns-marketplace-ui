# @blockydevs/arns-marketplace-ui

### A reusable React UI library for building ArNS marketplace interfaces. It ships a set of accessible, themeable components and higher‑level templates (tables, cards, dialogs, inputs) designed to help you assemble marketplace UIs quickly.

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
    - [Styles and Theming](#styles-and-theming)
    - [Components](#components)
    - [Templates](#templates)
- [Storybook](#storybook)
- [Developers](#developers)
    - [Requirements](#requirements)
    - [Scripts](#scripts)
    - [Testing](#testing)
    - [Linting & Formatting](#linting--formatting)

<!-- tocstop -->

## Installation

Requires node >= 18

Using pnpm (recommended):

```sh
pnpm add @blockydevs/arns-marketplace-ui
```

## Quick Start

1) Import the package CSS once in your app entry:

```ts
// main.tsx or App.tsx
import '@blockydevs/arns-marketplace-ui/style.css';
```

2) Use the components. For best results, wrap the UI area with the provided scope class (see [Styles and Theming](#styles-and-theming)):

```tsx
import { Button, Card, Row } from '@blockydevs/arns-marketplace-ui';

export function Example() {
  return (
    <div className="arns-marketplace-ui">
      <Card className="ar:mx-auto ar:flex ar:w-2xl ar:max-w-full ar:flex-col ar:gap-8">
        <Row variant="large" label="Domain name" value="blockydevs.org" />
        <Row label="Type of listing" value="Fixed price" />
        <Row label="Price" value="500.000000 ARIO" />
        <Button variant="secondary">Buy now</Button>
      </Card>
    </div>
  );
}
```

## Usage

### Styles and Theming

- CSS: The library ships compiled styles. Import once:
    - `import '@blockydevs/arns-marketplace-ui/style.css';`
- Scope: Base resets are applied inside an `.arns-marketplace-ui` wrapper to avoid affecting your whole app. Wrap either your entire app or the section that uses these components:
    - `<div className="arns-marketplace-ui">…</div>`
- Design tokens: You can override CSS variables to theme the library (e.g. brand color, neutrals, font):

```css
/* In your global CSS (after the library CSS import) */
.arns-marketplace-ui {
  --color-primary: #ffb938; /* brand */
  --font-base: 'Rubik', ui-sans-serif, system-ui, sans-serif;
  /* see src/style/global.css for the rest of available tokens */
}
```

Note: The internal classes use a Tailwind-style `ar:` prefix, but you do not need Tailwind in your app. The CSS you import already contains the compiled styles.

### Components

Import from the package root. Selected exports:

- Building blocks: `Button`, `Card`, `Header`, `Paragraph`, `Row`, `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Badge`, `Spinner`, `Skeleton`, `Popover`, `Dialog` (and subcomponents)
- Form: `Input`, `SearchInput`, `Label`, `Checkbox`, `CheckboxWithLabel`, `Select` (and subcomponents), `DatePicker`
- Navigation/data: `Pagination`
- Utilities (types and helpers): `getIntervalInMs`, `getIntervalFromMs`, `calculateCurrentDutchListingPrice`, `getDutchListingSchedule`, `formatDate`, `formatDuration`, `formatMillisecondsToDate`, `shortenAddress`, `useCursorPagination`

Example:

```tsx
import '@blockydevs/arns-marketplace-ui/style.css';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@blockydevs/arns-marketplace-ui';

export function TabsExample() {
  return (
    <div className="arns-marketplace-ui">
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="details">Domain details…</TabsContent>
        <TabsContent value="history">Bids history…</TabsContent>
      </Tabs>
    </div>
  );
}
```

### Templates

Higher-level, opinionated UI blocks for marketplace flows. For example, `ActiveListingTable` renders responsive tabular data (mobile cards + desktop table):

```tsx
import '@blockydevs/arns-marketplace-ui/style.css';
import { ActiveListingTable, type Domain } from '@blockydevs/arns-marketplace-ui';

const data: Domain[] = [
  {
    name: 'domain-example',
    price: { type: 'buyout', value: 500000000, symbol: 'ARIO' },
    type: { value: 'fixed' },
    endDate: undefined,
    action: () => console.log('Buy now')
  }
];

export function Listing() {
  return (
    <ActiveListingTable data={data} isPending={false} error={undefined} />
  );
}
```

Other templates include: `BidsTable`, `CompletedListingTable`, `DecreaseScheduleTable`, `MyANTsTable`, `DetailsCard`, `GoBackHeader`.

## Storybook

This repository includes Storybook with examples for every component and template.

- Start Storybook in dev mode:

```sh
pnpm storybook
# or: npm run storybook / yarn storybook
```

Open http://localhost:6006

- Build static Storybook:

```sh
pnpm build-storybook
```

Tip: See `src/stories/*.stories.tsx` for usage patterns.

## Developers

### Requirements

- node >= 18
- pnpm (or npm/yarn)

### Scripts

- `pnpm build` — typecheck and build the library with Vite
- `pnpm storybook` — run Storybook locally on port 6006
- `pnpm build-storybook` — build static Storybook
- `pnpm lint` — run eslint
- `pnpm typecheck` — run TypeScript project references build

### Testing

Vitest is configured in the project. To add tests, colocate them near the code and run:

```sh
pnpm test
```

### Linting & Formatting

- ESLint config is in `eslint.config.js`
- Prettier config is in `prettier.config.js`

Run checks:

```sh
pnpm lint
```

Format:

```sh
pnpm prettier --write .
```
