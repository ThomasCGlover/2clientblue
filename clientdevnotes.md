$ npm install @material-ui/core
 
After installation, material-ui is available for import:

import Button from '@material-ui/core/Button';
variant: The visual style of the component, either contained, outlined, fab, or empty for the default link-style.
color: One of primary, secondary, or default, which is the same color as if it’s left empty. We’ll cover the customization of these colors later.
mini: If the variant is set to fab (floating action button), then the size of the button is reduced.


import Card from '@material-ui/core/Card';

icons are imported from @material-ui/core/Icon.


As the Material Design spec was created with Roboto and Material Icons in mind, you might want to include them in your design. In this example, we’ll load them both from Google Fonts.

index.html (partial)
<link rel="stylesheet"
  href=“https://fonts.googleapis.com/css?family=Roboto:400,500">
<link rel="stylesheet"
  href=“https://fonts.googleapis.com/icon?family=Material+Icons">