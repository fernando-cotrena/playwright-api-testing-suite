import { ZodType } from 'zod';

/**
 * Valida un objeto o array usando Zod y lanza un error legible en caso de fallo.
 * @param schema ZodType a usar
 * @param data Datos a validar
 */
export function validateSchema<T>(schema: ZodType<T>, data: unknown) {
  const validation = schema.safeParse(data);

  if (!validation.success) {
    const first = validation.error.issues[0];

    // Extraer valor recibido en la ruta del error
    let receivedValue: unknown = data;
    for (const key of first.path) {
      if (receivedValue && typeof receivedValue === 'object') {
        receivedValue = (receivedValue as any)[key];
      } else {
        receivedValue = undefined;
        break;
      }
    }

    const path = first.path.length ? first.path.join('.') : '(root)';

    const errorMessage = [
      '❌ Schema validation failed!',
      `• Path       : ${path}`,
      `• Issue      : ${first.message}`,
      `• Received   : ${JSON.stringify(receivedValue, null, 2)}`,
    ].join('\n');

    throw new Error(errorMessage);
  }

  return validation.data;
}
