'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import Image from "next/image";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input/input";
// Import E164Number if needed
// import { E164Number } from "some-package"; 

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

// Moved RenderField outside to avoid recreation on each render
const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <>
          <FormControl>
            <PhoneInput
              defaultCountry="US"
              placeholder={props.placeholder || 'Enter phone number'}
              international
              withCountryCallingCode
              value={field.value as string | undefined}
              onChange={field.onChange}
              className="input-phone"
            />
          </FormControl>

          <div className="flex rounded-md border border-dark-500 bg-dark-400 mt-2">
            {props.iconSrc && (
              <Image
                src={props.iconSrc}
                height={24}
                width={24}
                alt={props.iconAlt || 'icon'}
                className="ml-2"
              />
            )}
            <FormControl>
              <Input
                placeholder={props.placeholder}
                {...field}
                className="shad-0"
              />
            </FormControl>
          </div>
        </>
      );

    // Add more cases for other form field types here

    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;

  // Return FormField
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
