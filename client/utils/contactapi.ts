import { toast } from "react-toastify";
import {
  ContactFormErrors,
  ContactFormValues,
  validateContactForm,
} from "./validation";

// Empty string = same Next.js project, so the call goes to /api/contact.
// Only set NEXT_PUBLIC_API_URL if your backend is a separate server (e.g. http://localhost:5000).
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const handleSubmitContact = async (
  values: ContactFormValues,
  setErrors: (errors: ContactFormErrors) => void,
  resetForm: () => void
): Promise<void> => {
  // 1. validate on the client first
  const errors = validateContactForm(values);
  setErrors(errors);
  if (Object.keys(errors).length > 0) return;

  // 2. send to the API route -> saves in MongoDB + sends the mail
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data: { success: boolean; message: string } = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Something went wrong");
    }
    toast.success(data.message);
    console.log("Contact form submitted successfully:", data.message);
    resetForm();
  } catch (error: unknown) {
    toast.error(error instanceof Error ? error.message : "Something went wrong");
  }
};