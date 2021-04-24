import Header from '../components/Header'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }) => (<>
    <Header />

    <main className={'flex-grow'}>
        <Component {...pageProps} />
    </main>

    <Footer />
</>);

export default App;
