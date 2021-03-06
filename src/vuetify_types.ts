export type VuetifyForm = Vue & {
  validate: () => boolean;
  resetValidation: () => boolean;
  reset: () => void;
};
