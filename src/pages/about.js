// import Header from '../components/Header'

const About = ({ text }) => (<>
    <div>
        {text || 'No text prop received.'}
    </div>

    <div>
        Some more text for testing.
    </div>
</>);

export default About

export const getProps = () => {
    return { text: 'Hello world.' }
}
