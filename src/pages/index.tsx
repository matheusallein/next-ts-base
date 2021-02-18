import Head from 'next/head'
import { Container, Typography } from '@material-ui/core'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>User C.R.U.D.</title>
      </Head>
      <main>
        <Typography color="secondary">Hello, World!</Typography>
      </main>
    </Container>
  )
}

export default Home
