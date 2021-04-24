const App = ({ Component, pageProps }) => (<>
    <main className={'flex-grow'}>
        <Component {...pageProps} />
    </main>
</>);

export default App;
