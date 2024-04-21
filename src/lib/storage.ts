const storage = {
  get(key: string) {
    if (typeof window === "undefined") return;
    const STORAGE = localStorage;
    const item = STORAGE.getItem(key);
    return item && item !== "undefined" ? JSON.parse(item) : null;
  },
  set(key: string, value: Object) {
    if (typeof window === "undefined") return;
    const STORAGE = localStorage;
    STORAGE.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    if (typeof window === "undefined") return;
    const STORAGE = localStorage;
    STORAGE.removeItem(key);
  },
  clear() {
    if (typeof window === "undefined") return;
    const STORAGE = localStorage;
    STORAGE.clear();
  },
};

export default storage;
