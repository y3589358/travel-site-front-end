# Travel Site Front End

## Deployment

#### Build

```bash
npm run build
```

#### Serve

```bash
npm install -g serve

serve build
```

Then navigate to `http://localhost:5000` to view the frontend app.

## Project Structure

```
src
├── components  
├── interfaces  
├── layouts     
├── recoil      
├── routes     
├── theme       
└── views       
```

## Development Guide

#### Add New Page

Pages are located in `views` folder.

A page is consisted of TSX file `ExamplePage.tsx` and stylesheet file `Example.scss`. Stylesheet file is imported in TSX
file.

```tsx
import React from 'react';
import './ExamplePage.scss';
// ...
```

#### Add New Component

Components are located in `components` folder and `interfaces/components` folder.

A component is consisted of TSX file `ExampleComponent.tsx`, stylesheet file `ExampleComponent.scss` and type definition
file `ExampleComponent.d.ts`.

Type definition file `ExampleComponent.d.ts` is the definition of props of the component.

```ts
interface ExampleComponentProps {
  attribute1?: string;
  attribute2?: number;
  // ...
}
```

Stylesheet file is imported in TSX file and props type should be embedded in the component.

```tsx
import React from 'react';
import './ExampleComponent.scss';

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  return <div className="example-component">
    <!--code here-->
  </div>;
};

export default ExampleComponent;
```

## Routing

Page | Route Path
---|---
login page | /login
main page | /
keywords list page | /search
destination list page | /location/:name
product detail page | /products/:id
add shopping cart page | /products/cart
shopping cart confirm page | /orders/cart
appointment submmit page | /orders/submit
orders pay page | /orders/pay
orders list page | /orders
orders detail page | /orders/:id

