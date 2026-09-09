import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Story } from '@/components/story'
import { Rooms } from '@/components/rooms'
import { Spaces } from '@/components/spaces'
import { Experiences } from '@/components/experiences'
import { Offers } from '@/components/offers'
import { Location } from '@/components/location'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Story />
      <Rooms />
      <Spaces />
      <Experiences />
      <Offers />
      <Location />
      <SiteFooter />
    </main>
  )
}
