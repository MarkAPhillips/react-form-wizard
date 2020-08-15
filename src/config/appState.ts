export type FormState = {
  formType: string | null;
  currentStep: number;
  steps: any[];
};

export type AppState = {
  form : FormState,
  data: any,
}
