import type { SessionManager } from "@kinde-oss/kinde-typescript-sdk";
import type { AstroCookies } from "astro";

export const sessionManager = (cookieStore: AstroCookies) =>
  ({
    getSessionItem: (itemKey: string) => {
      const item = cookieStore.get(itemKey);
      if (item) {
        try {
          const jsonValue = JSON.parse(item.value);
          if (typeof jsonValue === "object") {
            return jsonValue;
          }
          return item.value;
        } catch (error) {
          return item.value;
        }
      }
      return null;
    },

    setSessionItem: (itemKey: string, itemValue: any) => {
      if (itemValue !== undefined) {
        cookieStore.set(
          itemKey,
          typeof itemValue === "object" ? JSON.stringify(itemValue) : itemValue,
          { path: "/" }
        );
      }
    },

    removeSessionItem: (itemKey: string) => {
      cookieStore.delete(itemKey);
    },

    destroySession: () => {
      [
        "ac-state-key",
        "id_token_payload",
        "id_token",
        "access_token_payload",
        "access_token",
        "user",
        "refresh_token",
      ].forEach((name) => cookieStore.delete(name, { path: "/" }));
    },
  } as SessionManager);
