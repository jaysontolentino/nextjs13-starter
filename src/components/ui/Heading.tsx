import { cva } from "class-variance-authority"

const heading = cva('', {
    variants: {
        size: {
           default: '',
           sm: '',
           lg: '' 
        }
    },
    defaultVariants: {
        size: 'default'
    }
})

export interface HeadingProps {}

const Heading = () => {

}

export default Heading