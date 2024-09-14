import { ReactServerComponent } from "@lazarv/react-server/navigation";
import { RemoteComponent } from "@lazarv/react-server/router";

export default function HostingApplication() {
  return (
    <div>
      <h1>Welcome to the Hosting Application</h1>
      <p>This is a simple React Server Component.</p>

      <RemoteComponent src="http://localhost:3001" />
      <RemoteComponent src="http://localhost:3002" />
      <RemoteComponent src="http://localhost:3003" />
      <ReactServerComponent url="http://localhost:3004" defer outlet="" />
    </div>
  );
}
