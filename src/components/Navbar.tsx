import Link from "next/link"
import { button } from "@/ui/Button"

const Navbar = () => {
    return (
        <nav className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shad flex items-center justify-between dark:bg-slate-900 dark:border-slate-700">
            <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link href="/" className={button({variant: 'link'})}>App Name</Link>

                <div className="hidden md:flex gap-4">
                    The toggler
                </div>
            </div>
        </nav>
    )
}

export default Navbar