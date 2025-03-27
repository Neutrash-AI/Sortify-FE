export const HOSTNAME =
  typeof window !== "undefined"
    ? window.location.host.split(":")[0]
    : "localhost";
