const { z } = require("zod");

const validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
      });
    }
    next(err);
  }
};

const requestSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  email: z.string().email({ message: "Invalid email format" }),
  number: z
    .string()
    .regex(/^\d{10}$/, { message: "Number should be exactly 10 digits" }),
  requirement: z.string(),
  message: z.string(),
});

module.exports = validateRequest(requestSchema);
