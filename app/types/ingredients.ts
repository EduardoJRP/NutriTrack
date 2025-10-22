import { IngredientFormData } from 'app/lib/zodSchemas/newIngredient';
import {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormReset,
  FieldErrors,
} from 'react-hook-form';

export interface IngredientFormProps {
  onSubmit: (data: IngredientFormData) => void;
  onClose: () => void;
  register: UseFormRegister<IngredientFormData>;
  handleSubmit: UseFormHandleSubmit<IngredientFormData>;
  reset: UseFormReset<IngredientFormData>;
  errors: FieldErrors<IngredientFormData>;
}

export interface IngredientModalProps extends IngredientFormProps {
  isOpen: boolean;
}