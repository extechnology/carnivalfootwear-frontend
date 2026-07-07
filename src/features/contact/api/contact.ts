import type { Contact } from "../types/contact.types";

// Backend removed — stub function for local-only usage
export async function contact(data: Contact): Promise<void> {
  console.log("Contact form submitted (no backend):", data);
}