import {Heading, Paragraph} from "@/components/ui/Typography";

export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center overflow-x-hidden">

      <div className='flex flex-col border gap-4 border-slate-50 p-8'>
        <Heading size='sm'>Next JS 13 </Heading>
        <Paragraph size='lg'>
          This is a simple next js 13 starter template with typescript and tailwindcss
        </Paragraph>
      </div>
      
    </main>
  )
}
