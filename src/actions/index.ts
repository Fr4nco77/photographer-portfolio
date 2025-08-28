import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  contactAction: defineAction({
    accept: "form",
    input: z.object({
      name: z
        .string({
          required_error: "Name is required",
          invalid_type_error: "Name must be a text value",
        })
        .trim()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name cannot exceed 50 characters"),

      email: z
        .string({
          required_error: "Email is required",
          invalid_type_error: "Email must be a text value",
        })
        .trim()
        .email("Please enter a valid email address"),

      message: z
        .string({
          required_error: "Message is required",
          invalid_type_error: "Message must be a text value",
        })
        .trim()
        .min(10, "Message must be at least 10 characters long")
        .max(1000, "Message cannot exceed 1000 characters"),
    }),
    handler: async (input) => {
      try {
        // Aquí iría la lógica de envío (correo, BD, etc.)
        return {
          success: true,
          message: `${input.name}, your message has been sent successfully!`,
        };
      } catch (err) {
        return {
          success: false,
          message: "There was an error sending the message.",
        };
      }
    },
  }),
};
