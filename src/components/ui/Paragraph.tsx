import { classes } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes, PropsWithChildren, forwardRef } from "react"

const paragraph = cva('max-w-prose text-slate-700 dark:text-slate-200 mb-2 text-center', {
    variants: {
        size: {
            base: 'text-base sm:text-lg',
            sm: 'text-sm sm:text-base',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
        }
    },
    defaultVariants: {
        size: "base"
    }
})

export interface ParagraphProps extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraph> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({size, className, children, ...props}, ref) => {

    return (
        <p ref={ref} className={classes(paragraph({size, className}))} {...props}>{children}</p>
    )
})

export default Paragraph