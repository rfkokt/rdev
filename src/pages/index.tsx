import Head from '@/components/meta/Head';
import { getBaseUrl } from '@/helpers/url';


export default function Home() {
  return (
    <>
      <Head
          title="Enji Kusnadi · Front-End Developer"
          description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design."
          ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
          overrideTitle
      />
    </>
  )
}
