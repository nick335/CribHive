import { useState } from "react";
import {  z, ZodError } from "zod";

const schema = z.object({
  address: z.string().min(20, "Address must be at least 20 characters"),
  city: z.string().min(1, "City is required"),
  rent: z.string().min(1, "Rent is required"),
  bedrooms: z.string().min(1, "Bedrooms is required"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  image: z.array(z.string()).min(4, "At least 4 images required"),
  video: z.string().min(1, 'video is required')
});

type FormData = {
  address: string;
  city?: string | null;
  rent: string;
  bedrooms: string;
  description: string;
  image: string[];
  video: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

export function useFormValidation() {
  const [validationErrors, setValidationErrors] = useState<FieldErrors>({});

  const handleSubmit = async (
    formData: FormData,
    onSuccess: () => void,
    onError: () => void = () => {}
  ) => {
    try {
      schema.parse(formData); // Validate the form data
      // Submit the form data to your server or perform further actions
      console.log("Form data is valid:", formData);
      setValidationErrors({});
      onSuccess();
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: FieldErrors = {};
        error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof FormData;
          fieldErrors[fieldName] = err.message;
        });
        setValidationErrors(fieldErrors);
        onError();
      }
    }
  };

  return {
    validationErrors,
    handleSubmit,
  };
}
