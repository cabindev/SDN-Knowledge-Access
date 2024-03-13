import { Schema } from "yup";

export async function validate<T = Record<string, any>>(
    scheme: Schema<T>,
    data: Record<string, any> | null
) {
    try {
        await scheme.validate(data, { abortEarly: false });
        return { isValid: true, errors: null };
    } catch (error: any) {
        const { errors } = error;
        return { isValid: false, errors };
    }
}
