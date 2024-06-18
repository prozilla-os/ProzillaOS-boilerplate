import { AppsConfig, fileExplorer } from "prozilla-os";

export const appsConfig = new AppsConfig({
	apps: [
		fileExplorer.setName("File Explorer")
			.setDescription("Application for browsing files.")
	]
});
