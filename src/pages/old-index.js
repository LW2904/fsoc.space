import { Head } from 'dhow'

import { Container } from '../components/utils'

const Home = () => (<>
    <Head>
        <title>fsoc.space</title>
    </Head>

    <Container>
        <h1 className={'font-serif font-bold text-3xl mb-4'}>
            Hey there, I'm fsoc.
        </h1>
    </Container>

    <Container className={'prose'}>
        <p>
            My name is Laurenz Weixlbaumer. I'm an Austrian software developer and currently a freelancer: 
            I build things, usually by writing things. Sometimes I write <a href={'/words'}>words</a> about 
            the process (and other things).
        </p>

        <p>
            You can contact me by email via <code>root@ this domain</code>. I'm also on <a href={'https://github.com/fs-c/'}>github/fs-c</a> and <a href={'https://gitlab.com/fsoc'}>gitlab/fsoc</a>. 
            Sometimes I play games on <a href={'http://steamcommunity.com/profiles/76561198091491690'}>steam/f50c</a>.
        </p>
    </Container>

</>);

export default Home;
