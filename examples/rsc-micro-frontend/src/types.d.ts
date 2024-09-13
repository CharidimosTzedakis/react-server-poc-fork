declare module "@lazarv/react-server/server/context.mjs" {
  export function getContext(context: symbol): {
    error?: (errorMsg: string) => void;
  };
}

declare module "@lazarv/react-server/server/symbols.mjs" {
  export const LOGGER_CONTEXT: symbol;
}
