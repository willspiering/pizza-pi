import React, { useState, useEffect } from "react";

export default function usePersistedState<T>(defaultValue: T, key: string, storage = window.localStorage) {
	let [value, setValue] = useState(() => {
		try {
			let cachedValue = storage.getItem(key);
			if (!cachedValue) return defaultValue;
			try {
				return JSON.parse(cachedValue);
			} catch (err) {
				// Unable to parse the JSON, must be a string?
				return cachedValue;
			}
		} catch (err) {
			return defaultValue;
		}
	});

	useEffect(() => {
		let valueStr = typeof value === "string" ? value : JSON.stringify(value);
		storage.setItem(key, valueStr);
	}, [key, value]);

	return [value, setValue];
}
