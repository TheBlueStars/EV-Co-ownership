export function isRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
}

export function isEmail(value) {
  if (!value) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(value).toLowerCase());
}

export function minLength(value, min) {
  if (value == null) return false;
  return String(value).length >= min;
}

export function isPositiveNumber(value) {
  const n = Number(value);
  return !Number.isNaN(n) && n > 0;
}

// Helper validate form: rules là object { field: [fn1, fn2...] }
export function validateObject(obj, rules) {
  const errors = {};

  Object.entries(rules || {}).forEach(([field, validators]) => {
    const value = obj[field];
    for (const { fn, message } of validators) {
      if (!fn(value)) {
        errors[field] = message;
        break;
      }
    }
  });

  return errors;
}
