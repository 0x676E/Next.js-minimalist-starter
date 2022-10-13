import production from "config/appsettings.json";
import { Settings } from "config/types";

let settings: Settings = {};

try {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const development = require("./appsettings.development.json");
	settings = process.env.NODE_ENV !== "development" ? production : development;
} catch {
	settings = production;
}

export default settings;
