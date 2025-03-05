# react-pretty-badge 🎨

A simple and stylish React badge component.

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

| Color  | Hex Code  | Preview                                                                             |
| ------ | --------- | ----------------------------------------------------------------------------------- |
| red    | `#FF5924` | <div style="width:16px; height:16px; background:#FF5924; border-radius:3px;"></div> |
| blue   | `#3089F2` | <div style="width:16px; height:16px; background:#3089F2; border-radius:3px;"></div> |
| green  | `#2ECC71` | <div style="width:16px; height:16px; background:#2ecc71; border-radius:3px;"></div> |
| yellow | `#FBBE29` | <div style="width:16px; height:16px; background:#FBBE29; border-radius:3px;"></div> |
| purple | `#9B59B6` | <div style="width:16px; height:16px; background:#9b59b6; border-radius:3px;"></div> |
| grey   | `#8A8A8A` | <div style="width:16px; height:16px; background:#8a8a8a; border-radius:3px;"></div> |
| orange | `#FF843E` | <div style="width:16px; height:16px; background:#FF843E; border-radius:3px;"></div> |
| peach  | `#FEB8B7` | <div style="width:16px; height:16px; background:#FEB8B7; border-radius:3px;"></div> |
| cyan   | `#0ABDF6` | <div style="width:16px; height:16px; background:#0ABDF6; border-radius:3px;"></div> |

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
