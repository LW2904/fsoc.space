const Header = () => (<>
    <header className={'container flex flex-col items-center border-b border-gray-300 mt-2 mb-4 pb-2'}>
        <a href={'/'} className={'italic font-mono font-bold'}>
            fsoc
        </a>

        <nav className={'w-full flex flex-row justify-between gap-2 prose'}>
            <a href={'/about'}>/about</a> <a href={'/projects'}>/projects</a> <a href={'/words'}>/words</a> <a href={'/files'}>/files</a>
        </nav>
    </header>
</>);

const Footer = () => (<>
    <footer className={'flex flex-row gap-2 prose container text-sm py-2 border-t border-gray-300'}>
        <span>Built with <a href={'https://github.com/fs-c/dhow/tree/rewrite'}>fs-c/dhow</a>.</span>

        <div className={'flex-grow'} />

        <a href={'/imprint'}>/imprint</a>
        <a href={'/privacy'}>/privacy</a>
    </footer>
</>);

const App = ({ Component, pageProps = {} }) => (<>
    {pageProps.showHeader === false ? <></> : <Header />}

    <main className={`flex-grow ${pageProps.wrapperClassName || ''}`}>
        <Component {...pageProps} />
    </main>

    <Footer />
</>);

export default App;
