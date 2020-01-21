// import env from "../env";
// import { setConfig } from "next/config";

// setConfig(env);

import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
