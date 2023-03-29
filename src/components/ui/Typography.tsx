import { classes } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes, forwardRef, PropsWithChildren } from "react"

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

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({size, className, children, ...props}, ref) => {

    return (
        <p ref={ref} className={classes(paragraph({size, className}))} {...props}>{children}</p>
    )
})

Paragraph.displayName = 'Paragraph'

const heading = cva('text-slate-900 font-extrabold leading-tight tracking-tighter dark:text-slate-50', {
    variants: {
        size: {
           base: 'text-4xl md:5xl lg:6xl',
           sm: 'text-2xl md:3xl lg:4xl',
           lg: 'text-5xl md:6xl lg:7xl' 
        },
    },
    defaultVariants: {
        size: 'base'
    }
})

export interface HeadingProps extends PropsWithChildren, HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof heading> {}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({children, size, className, ...props}, ref) => {
    return <h1 ref={ref} className={classes(heading({size, className}))} {...props}>{children}</h1>
})

Heading.displayName = 'Heading'

