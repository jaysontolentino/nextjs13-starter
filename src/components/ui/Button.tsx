import { classes } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const button = cva('active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transistion-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:ring-slate-400 disabled:pointer-events-none dark:focus-ring-offset-slate-900', {
    variants: {
        variant: {
            default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
            outline: 'bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-100 dark:border-slate-700',
            ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
            link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent'
        },
        size: {
            default: 'h-10 py-2 px-4',
            sm: 'h-9 px-2 rounded-md',
            lg: 'h-11 px-8 rounded-md',
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, isLoading, size, variant, className, ...props }, ref) => {
    return <button ref={ref} className={classes(button({size, variant, className}))} {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
    </button>
})

Button.displayName = 'Button'