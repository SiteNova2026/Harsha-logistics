import { toast } from "react-toastify";
import {
  QuoteFormErrors,
  QuoteFormValues,
  buildQuotePayload,
  validateQuoteForm,
} from "./quoteValidation";

// Empty = same Next.js project (calls /api/quote)
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const handleSubmitQuote = async (
  values: QuoteFormValues,
  sectionKeys: string[],
  setErrors: (errors: QuoteFormErrors) => void,
  resetForm: () => void
): Promise<void> => {
  const errors = validateQuoteForm(values, sectionKeys);
  setErrors(errors);
  if (Object.keys(errors).length > 0) return;

  try {
    const res = await fetch(`${API_URL}/api/quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildQuotePayload(values, sectionKeys)),
    });

    const data: { success: boolean; message: string } = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Something went wrong");
    }

    toast.success(data.message);
    resetForm();
  } catch (error: unknown) {
    toast.error(error instanceof Error ? error.message : "Something went wrong");
  }
};