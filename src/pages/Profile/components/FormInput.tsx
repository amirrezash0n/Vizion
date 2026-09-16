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
        <label className="mb-2 block font-yekanBold text-xs text-balticSea-400 xs:text-sm">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl bg-white px-3 py-2.5 xs:px-4 xs:py-3",
            "border transition-colors outline-none",
            "font-yekanMedium text-xs text-balticSea-400 xs:text-sm",
            "placeholder:font-yekanRegular placeholder:text-dawn",
            error
              ? "border-danger focus:border-danger"
              : "border-cloud focus:border-primary",
            className,
          )}
          {...rest}
        />
        {error && (
          <p className="mt-1.5 font-yekanMedium text-[10px] text-danger xs:text-xs">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
