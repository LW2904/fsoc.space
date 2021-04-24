import path from 'path';
import marked from 'marked';
import parseFrontMatter from 'gray-matter';
import { readdir, readFile } from 'fs/promises';

import { Container, Date } from '../../components/utils';

const Post = ({ title, date, description, content }) => (<>
    <Container>
        <h1 className={'font-serif text-3xl'}>
            {title}
        </h1>

        <small className={'text-sm font-sans text-gray-700'}>
            <Date date={date} />
        </small>
    </Container>

    <Container className={'prose mb-3'}>
        <h3 className={'!font-normal font-serif'}>
            {description}
        </h3>

        <div html={content} />
    </Container>
</>);

const contentDirectory = 'posts'

export const getPaths = async () => {
    const paths = (await readdir(contentDirectory))
        .map((p) => path.parse(p).name);
    
    return paths;
};

export const getProps = async (slug) => {
    const parsedPost = parseFrontMatter(
        await readFile(path.join(contentDirectory, `${slug}.md`), 'utf-8')
    );

    parsedPost.content = marked(parsedPost.content);

    return { content: parsedPost.content, ...parsedPost.data };
};

export default Post;
