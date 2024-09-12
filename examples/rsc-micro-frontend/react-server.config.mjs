export default {
  importMap: {
    imports: {
      react: "https://esm.sh/react@0.0.0-experimental-58af67a8f8-20240628?dev",
      "react/jsx-dev-runtime":
        "https://esm.sh/react@0.0.0-experimental-58af67a8f8-20240628/jsx-dev-runtime?dev",
      "react-dom":
        "https://esm.sh/react-dom@0.0.0-experimental-58af67a8f8-20240628?dev",
      "react-dom/client":
        "https://esm.sh/react-dom@0.0.0-experimental-58af67a8f8-20240628/client?dev",
      "react-server-dom-webpack/client.browser":
        "https://esm.sh/react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628/client.browser?dev",
      "http://localhost:3002/": "/",
    },
  },
  resolve: {
    shared: [
      "react",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "react-dom",
      "react-dom/client",
      "react-server-dom-webpack/client.browser",
    ],
  },
};
