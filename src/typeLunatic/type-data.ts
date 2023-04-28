export type LunaticData = {
	CALCULATED?: Record<string, unknown>;
	EXTERNAL?: Record<string, unknown>;
	COLLECTED?: Record<string, LunaticCollectedValue>;
};

export type LunaticCollectedValue = {
	COLLECTED: unknown;
	EDITED: unknown;
	FORCED: unknown;
	INPUTED: unknown;
	PREVIOUS: unknown;
};