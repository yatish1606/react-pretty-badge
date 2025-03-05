# react-pretty-badge

A simple and stylish React badge component.

<img src="./pretty-badge-banner.png" width="100%"/>

## 🚀 Installation

Install the package via npm:

```sh
npm install react-pretty-badge
```

## 📦 Usage

### **Basic Example**

```tsx
import React from "react";
import PrettyBadge from "react-pretty-badge";

const App = () => {
  return <PrettyBadge label="Premium" />;
};

export default App;
```

## 🎨 Customization

### **Props**

| Prop           | Type                                                           | Default | Description                       |
| -------------- | -------------------------------------------------------------- | ------- | --------------------------------- |
| `label`        | string                                                         | -       | Text inside the badge             |
| `color`        | From a predefined list of colors, or a hex code                | `grey`  | Background color of the badge     |
| `size`         | Can be `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl` or a number | `md`    | Size of the badge                 |
| `borderRadius` | Can be `rounded`, `pill`, or a number                          | `pill`  | Size of the badge                 |
| `id`           | string                                                         | -       | Optional id for the badge         |
| `className`    | string                                                         | -       | Optional class name for the badge |

### **Custom Styles**

You can override styles using CSS:

#### For badge container

```css
.react-pretty-badge-parent {
  background-color: red;
  border: 1px solid blue;
}
```

#### For badge text

```css
.react-pretty-badge-text {
  font-family: "system-ui", sans-serif;
}
```

#### Targetting a specific badge

To apply styles only for a single badge, provide an id and apply style using

```css
.react-pretty-badge-<your-id > {
  font-family: "system-ui", sans-serif;
}
```

#### Custom classes

Use the `className` property to add a custom class to the badge.

```css
.my-custom-class {
  filter: blur(10px);
}
```

### **Available Colors**

| Color  | Hex Code  | Preview                                           |
| ------ | --------- | ------------------------------------------------- |
| red    | `#FF5924` | ![](https://placehold.co/15x15/f03c15/FF5924.png) |
| blue   | `#3089F2` | ![](https://placehold.co/15x15/3089F2/FF5924.png) |
| green  | `#2ECC71` | ![](https://placehold.co/15x15/2ECC71/FF5924.png) |
| yellow | `#FBBE29` | ![](https://placehold.co/15x15/FBBE29/FF5924.png) |
| purple | `#9B59B6` | ![](https://placehold.co/15x15/9B59B6/FF5924.png) |
| grey   | `#8A8A8A` | ![](https://placehold.co/15x15/8A8A8A/FF5924.png) |
| orange | `#FF843E` | ![](https://placehold.co/15x15/FF843E/FF5924.png) |
| peach  | `#FEB8B7` | ![](https://placehold.co/15x15/FEB8B7/FF5924.png) |
| cyan   | `#0ABDF6` | ![](https://placehold.co/15x15/0ABDF6/FF5924.png) |

#### Using a predefined color

```tsx
import React from "react";
import PrettyBadge from "react-pretty-badge";

const App = () => {
  return (
    <>
      <PrettyBadge label="this badge is orange!" color="orange" />
      <PrettyBadge label="this badge is cyan!" color="cyan" size="lg" />
    </>
  );
};
```

#### Using a custom color

```tsx
import React from "react";
import PrettyBadge from "react-pretty-badge";

const App = () => {
  return (
    <>
      <PrettyBadge label="this badge is black!" color="#000000" />
    </>
  );
};
```

## 🛠️ Development

#### **Run Locally with npm link**

```sh
git clone https://github.com/yatish1606/react-pretty-badge.git
cd react-pretty-badge
npm install
npm run build
npm link
```

Then, in your test project:

```sh
npm link react-pretty-badge
```

## 📜 License

MIT License © 2025 [Yatish Kelkar](https://yatish.netlify.app)
