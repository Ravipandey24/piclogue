import * as React from "react"

import { cn } from "@/lib/utils"
import { Input as NextUIInput, InputProps as NextUIInputProps } from "@nextui-org/input"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps & NextUIInputProps>(
  ({ className, type, variant='bordered' , size="sm" as NextUIInputProps['size'], ...props  }, ref) => {
    return (
      <NextUIInput
        type={type}
        className={cn(
          "bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
