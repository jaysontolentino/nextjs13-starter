import {Heading, Paragraph} from "@/components/ui/Typography";

export default function Home() {
  return (
    <main className="bg-primary-light">
      <Heading size={'lg'}>This is the Title</Heading>
      <Paragraph size='lg' className="text-primary dark:text-primary">Hello Next 13</Paragraph>
    </main>
  )
}
