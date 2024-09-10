import { RemoteComponent } from "@lazarv/react-server/router";

export default function HostingApplication() {
  return (
    <div>
      <h1>Welcome to the Hosting Application</h1>
      <p>This is a simple React Server Component.</p>

      <RemoteComponent src="http://localhost:4001" />
    </div>
  );
}
