'use client'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import Image from "next/image";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string; // corrected the property name
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

// Moved RenderField outside to avoid recreation on each render
const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) { // Corrected to use props.fieldType
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc} // Corrected to use props.iconSrc
              height={24}
              width={24}
              alt={props.iconAlt || 'icon'} // Corrected to use props.iconAlt
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder} // Corrected to use props.placeholder
              {...field}
              className="shad-0"
            />
          </FormControl>
        </div>
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
      name={name} // Use the name prop passed to the component
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
