import { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView } from "prozilla-os";

export function App() {
	return <ProzillaOS
		systemName="ExampleOS"
		tagLine="Powered by ProzillaOS"
	>
		<Taskbar/>
		<WindowsView/>
		<ModalsView/>
		<Desktop/>
	</ProzillaOS>;
}
