const state = { name: "" };
import { getContext } from "../../../packages/react-server/server/context.mjs";
import { LOGGER_CONTEXT } from "./symbols.mjs";

export default function ServerActionComponent() {
  return (
    <form
      action={async (formData) => {
        "use server";
        state.name = formData.get("name") as string;
        const logger = getContext(LOGGER_CONTEXT);
        logger?.error?.("server log");
        console.log("hello from server action");
        console.log("state.name", state.name);
      }}
    >
      <h2>Welcome, {state.name || "Anonymous"}</h2>
      <input type="text" name="name" defaultValue={state.name} />
      <input type="submit" value="Submit" />
    </form>
  );
}
