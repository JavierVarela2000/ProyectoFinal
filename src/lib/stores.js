import { writable } from "svelte/store";

export const organizacionesStore = writable([]);

export const loadingStore = writable(false);
