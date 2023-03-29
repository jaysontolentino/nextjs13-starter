import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const button = cva('text-center', {
    variants: {
        size: {
            default: '',
            sm: '',
            md: '',
            lg: ''
        },
        variant: {
            default: '',
            outline: '',
            link: '',
            ghost: ''
        }
    },
    defaultVariants: {
        size: 'default',
        variant: 'default'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    isLoading?:boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, }, ref) => {
    return <button></button>
})

Button.displayName = 'Button'