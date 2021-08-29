import {UseFormReturn} from 'react-hook-form';

export interface FormData {
  name: string;
  lastname: string;
  dni: string;
  birthDate: string;
  phoneNumber: string;
  gender: string;
  province: string;
  department: string;
  district: string;
  street: string;
  streetNumber: string;
  flat: string;
  legal: boolean;
  hasReachTycEnd: boolean;
}

export type OnboardingContextType = {
  form?: UseFormReturn<FormData>;
  currentStep: number;
  handleNextStep: () => void;
};
