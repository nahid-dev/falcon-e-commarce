import { cn } from "@/lib/utils";


const INPUT_LABEL_STYLES =
  "appearance-none block text-base font-semibold text-neutral-700 flex gap-1";
const INPUT_BOX_STYLES =
  "appearance-none block w-full text-sm rounded-md text-neutral-500 border border-neutral-300 p-3 placeholder-neutral-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 active:border-emerald-500 cursor-text";

export default function TextInputField({
  type = "text",
  name,
  id,
  label,
  placeholder,
  labelClassName,
  className,
  value,
  onChange,
  defaultValue,
  error,
  backendError,
  required = false,
  labelProps = null,
  ...props
}) {
  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className);

  const LABEL_FIELD_STYLES = cn(INPUT_LABEL_STYLES, labelClassName);

  return (
    <div className="flex flex-col w-full gap-1">

      {label && (
        <label htmlFor={id} className={LABEL_FIELD_STYLES}>
          {label}{" "}
          {required ? <span className="text-red-500 text-sm">*</span> : null}
          {labelProps ? labelProps : null}
        </label>
      )}

      <input
        type={type}
        defaultValue={defaultValue}
        id={id}
        name={name}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLES}
        value={value}
        onChange={onChange}
        {...props}
      />

      {(!!error || !!backendError) && (
        <p className="rounded-md bg-red-50 px-2 py-1 mt-2 text-[13px] text-red-500 border border-red-200">
          {error || backendError}
        </p>
      )}
    </div>
  );
}
