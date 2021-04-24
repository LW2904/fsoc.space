const Footer = () => (<>
    <footer className={'flex flex-row gap-2 ty container text-sm py-2 border-t border-gray-300'}>
        <span>Built with <a href={'https://github.com/fs-c/dhow/tree/rewrite'}>fs-c/dhow</a>.</span>

        <div className={'flex-grow'} />

        <a href={'/imprint'}>/imprint</a>
        <a href={'/privacy'}>/privacy</a>
    </footer>
</>);

const App = ({ Component, pageProps = {} }) => (<>
    <main className={`flex-grow ${pageProps.wrapperClassName || ''}`}>
        <Component {...pageProps} />
    </main>

    <Footer />
</>);

export default App;
