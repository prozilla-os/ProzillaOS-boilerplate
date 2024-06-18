import { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView } from "prozilla-os";
import { appsConfig } from "../config/appsConfig";

export function App() {
	return (
		<ProzillaOS
			systemName="ExampleOS"
			tagLine="Powered by ProzillaOS"
			config={{
				apps: appsConfig
			}}
		>
			<Taskbar/>
			<WindowsView/>
			<ModalsView/>
			<Desktop/>
		</ProzillaOS>
	);
}
