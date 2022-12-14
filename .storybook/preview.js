import {defaultTheme, Provider, lightTheme, darkTheme} from '@adobe/react-spectrum';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <Story />
    </Provider>
  ),
];
