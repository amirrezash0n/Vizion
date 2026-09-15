import { forwardRef } from "react";
import { cn } from "../../../utils/class.utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className = "", ...rest }, ref) => {
    return (
      <div className="w-full" dir="rtl">
        <label className="block font-yekanBold text-xs xs:text-sm text-balticSea-400 mb-2">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full bg-white rounded-xl px-3 xs:px-4 py-2.5 xs:py-3",
            "border outline-none transition-colors",
            "font-yekanMedium text-xs xs:text-sm text-balticSea-400",
            "placeholder:text-dawn placeholder:font-yekanRegular",
            error
              ? "border-danger focus:border-danger"
              : "border-cloud focus:border-primary",
            className,
          )}
          {...rest}
        />
        {error && (
          <p className="mt-1.5 font-yekanMedium text-[10px] xs:text-xs text-danger">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
