import Head from 'next/head'
import Image from 'next/image'
import { Container, Typography } from '@material-ui/core'
import DefaultSVG from '../assets/default.svg'
import PlaceholderJPG from '../assets/placeholder.jpg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next.js TypeScript Base</title>
      </Head>
      <main>
        <Typography color="secondary">Hello, World!</Typography>
        <DefaultSVG />
        <Image
          src={PlaceholderJPG}
          alt="Placeholder"
          width={350}
          height={150}
        />
      </main>
    </Container>
  )
}

export default Home
