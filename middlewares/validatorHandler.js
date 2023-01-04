/**
 * It takes a schema and a property, and returns a function that takes a request, response, and next
 * function, and validates the request's property against the schema
 * @param schema - The schema that we want to validate against.
 * @param property - The property of the request object that contains the data to be validated.
 * @returns A function that takes in a schema, property, and returns a function that takes in req, res,
 * and next.
 */
export const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(res.status(400).json({ error: error.message }));
    }
    next();
  };
};
