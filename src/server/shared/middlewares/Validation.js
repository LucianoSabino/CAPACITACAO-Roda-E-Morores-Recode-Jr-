import { StatusCodes } from "http-status-codes";
import { ValidationError } from "yup";

const validation = (getAllSchemas) => async (req, res, next) => {
  const schema = getAllSchemas((schema) => schema);

  // Amarzena os erros encontrados
  const errosResult = {};

  Object.entries(schema).forEach(([Key, schema]) => {
    try {
      schema.validateSync(req[Key], {
        abortEarly: false, // Impede a execução da api
      });
    } catch (error) {
      const yupError = error;
      const ValidationError = {};

      yupError.inner.forEach((err) => {
        if (!err.path) return;
        ValidationError[err.path] = err.message;
      });

      errosResult[Key] = ValidationError;
    }
  });
  if (Object.entries(errosResult).length === 0) {
    return next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
      Massage: { Error: errosResult },
    });
  }
};

export { validation };
