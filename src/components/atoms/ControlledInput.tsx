import React, { useEffect, useRef, useState } from "react";

export type inputType = "text" | "number" | "float" | "email" | "password";

interface Props {
  onChange: (value: any) => void;
  type?: inputType;
  decimals?: number; // how many decimal places to display if type is float
  placeholder?: string;
  defaultValue: any;
  debounceTime?: number;
  isDisabled?: boolean;
}

const ControlledInput = ({
  onChange,
  type,
  placeholder = "",
  defaultValue = "",
  debounceTime = 500,
  decimals = 2,
  isDisabled = false,
}: Props) => {
  const displayValue =
    type === "float" ? defaultValue.toFixed(decimals) : defaultValue;
  const [value, setValue] = useState(displayValue);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      let emitValue: any;
      if (type === "number") {
        emitValue = parseInt(value || 0);
      } else if (type === "float") {
        emitValue = parseFloat(value || 0);
      } else {
        emitValue = value;
      }
      if (emitValue !== defaultValue) {
        onChange(emitValue);
      }
    }, debounceTime);
  }, [value, debounceTime, defaultValue, onChange, type]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type || "text"}
      placeholder={placeholder || ""}
      disabled={isDisabled}
      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        isDisabled ? "bg-gray-100" : ""
      }`}
    />
  );
};

export default ControlledInput;
