//the Abstraction
abstract class ListItemViewAbstraction {
    constructor(protected contentType: ContentTypeImplementation) {
    }

    abstract getRenderedItem(): string;
}

//the Implementation
interface ContentTypeImplementation {
    renderTitle(): string;

    renderCaption(): string;

    renderThumbnail(): string;

    renderLink(): string;
}

class VisualListItemView extends ListItemViewAbstraction {
    getRenderedItem(): string {
        return `    <li>
        ${this.contentType.renderThumbnail()}
        ${this.contentType.renderLink()}
    </li>`;
    }
}

class DescriptiveListItemView extends ListItemViewAbstraction {
    getRenderedItem(): string {
        return `    <li>
        ${this.contentType.renderTitle()}
        ${this.contentType.renderCaption()}
    </li>`;
    }
}

class PostContentType implements ContentTypeImplementation {
    constructor(
        protected title: string,
        protected caption: string,
        protected imageUrl: string,
        protected url: string) {
    }

    renderTitle(): string {
        return `<h2>${this.title}<h2>`;
    }

    renderCaption(): string {
        return `<p>${this.caption}</p>`;
    }

    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }

    renderLink(): string {
        return `<a href='${this.url}'>${this.title}</a>`;
    }
}

class VideoContentType implements ContentTypeImplementation {
    constructor(
        protected title: string,
        protected description: string,
        protected thumbnailUrl: string,
        protected url: string) {
    }

    renderTitle(): string {
        return `<h2>${this.title}<h2>`;
    }

    renderCaption(): string {
        return `<p>${this.description}</p>`;
    }

    renderThumbnail(): string {
        return `<img alt='${this.title}' src='${this.thumbnailUrl}'/>`;
    }

    renderLink(): string {
        return `<a href='${this.url}'>${this.title}</a>`;
    }
}

class TweetContentType implements ContentTypeImplementation {
    constructor(
        protected tweet: string,
        protected profilePictureUrl: string,
        protected tweetUrl: string) {
    }

    renderTitle(): string {
        return `<h2>${this.tweet.substring(0, 50)}...<h2>`;
    }

    renderCaption(): string {
        return `<p>${this.tweet}</p>`;
    }

    renderThumbnail(): string {
        return `<img alt='${this.tweet.substring(0, 50)}...' src='${this.profilePictureUrl}'/>`;
    }

    renderLink(): string {
        return `<a href='${this.tweetUrl}'>${this.tweet.substring(0, 30)}...</a>`;
    }
}

//The client code
const content = [
    new PostContentType(
        'New example available on RefactoringGuru',
        'Bridge design pattern now has a real world example',
        'http://img.sample.org/bridge.jpg',
        'https://refactoring.guru/design-patterns/bridge',
    ),
    new TweetContentType(
        'Windows will support Linux executables natively on Windows 12',
        'http://img.sample.org/profile.jpg',
        'https://twitter.com/genbeta/387487346856/',
    ),
    new VideoContentType(
        'BRIDGE | Patrones de Diseño',
        'En éste vídeo de la serie de PATRONES DE DISEÑO veremos el PATRÓN BRIDGE!',
        'http://img.sample.org/bridge.jpg',
        'https://www.youtube.com/watch?v=6bIHhzqMdgg',
    ),
];

//client code
const visualList = content.map(i => new VisualListItemView(i));
console.log('<h1>Visual Page</h1>');
console.log('<ul>');
for (const visualItem of visualList) {
    console.log(visualItem.getRenderedItem());
}
console.log('</ul>');
const descriptiveList = content.map(i => new DescriptiveListItemView(i));
console.log('<h1>Descriptive Page</h1>');
console.log('<ul>');
for (const descriptiveItem of descriptiveList) {
    console.log(descriptiveItem.getRenderedItem());
}
console.log('</ul>');
