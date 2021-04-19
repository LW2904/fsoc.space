import { Container } from '../components/utils';

const Item = ({ children, href }) => (<>
    <div className={'group flex flex-col'}>
        <a href={href} className={'pb-1 pt-3 cursor-pointer'}>
            {children}
        </a>

        <div className={'h-px w-full bg-gray-500 group-hover:bg-indigo-600'} />
    </div>
</>);

const Header = () => (<>
    <Container className={'mb-3 flex flex-row items-end'}>
        <Item href={'/'}>fsoc.space</Item>

        <div className={'flex-grow h-px bg-gray-300'} />

        <Item href={'/words'}>/files</Item>

        <div className={'w-4 h-px bg-gray-300'} />

        <Item href={'/words'}>/words</Item>
    </Container>
</>);

const Footer = () => (<>
    <Container>
        <div className={'pt-1 pb-3 mt-3 border-t border-gray-300 flex flex-row text-gray-700 text-sm'}>
            <p>
                Made with <a className={'underline'} href={'https://github.com/fs-c/dhow/tree/rewrite'}>fs-c/dhow</a>.
            </p>

            <div className={'flex-grow'} />

            <a className={'underline'} href={'/legal'}>/legal</a>
        </div>
    </Container>
</>);

const App = ({ Component, pageProps }) => (<>
    <Header />

    <div className={'flex-grow'}>
        <Component {...pageProps} />
    </div>

    <Footer />
</>);

export default App;
