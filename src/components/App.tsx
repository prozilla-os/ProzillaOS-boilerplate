import "./App.module.css";
import { Desktop, ModalsView, ProzillaOS, Taskbar, WindowsView } from "prozilla-os";

function App() {
	return <ProzillaOS
		systemName="ExampleOS"
		tagLine="Power by ProzillaOS"
	>
		<Taskbar/>
		<WindowsView/>
		<ModalsView/>
		<Desktop/>
	</ProzillaOS>;
}

export default App;
