"use strict";
class ListItemViewAbstraction {
    contentType;
    constructor(contentType) {
        this.contentType = contentType;
    }
}
// Now we can extend the Abstraction with the different views and independently of the content types
class VisualListItemView extends ListItemViewAbstraction {
    getRenderedItem() {
        return `    <li>
        ${this.contentType.renderThumbnail()}
        ${this.contentType.renderLink()}
    </li>`;
    }
}
class DescriptiveListItemView extends ListItemViewAbstraction {
    getRenderedItem() {
        return `    <li>
        ${this.contentType.renderTitle()}
        ${this.contentType.renderCaption()}
    </li>`;
    }
}
// Time to create the different implementations, in this case the differentcontent types we have in our application: posts, videos, articles, tweets...
class PostContentType {
    title;
    caption;
    imageUrl;
    url;
    constructor(title, caption, imageUrl, url) {
        this.title = title;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.url = url;
    }
    renderTitle() {
        return `<h2>${this.title}<h2>`;
    }
    renderCaption() {
        return `<p>${this.caption}</p>`;
    }
    renderThumbnail() {
        return `<img alt='${this.title}' src='${this.imageUrl}'/>`;
    }
    renderLink() {
        return `<a href='${this.url}'>${this.title}</a>`;
    }
}
class VideoContentType {
    title;
    description;
    thumbnailUrl;
    url;
    constructor(title, description, thumbnailUrl, url) {
        this.title = title;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.url = url;
    }
    renderTitle() {
        return `<h2>${this.title}<h2>`;
    }
    renderCaption() {
        return `<p>${this.description}</p>`;
    }
    renderThumbnail() {
        return `<img alt='${this.title}' src='${this.thumbnailUrl}'/>`;
    }
    renderLink() {
        return `<a href='${this.url}'>${this.title}</a>`;
    }
}
class TweetContentType {
    tweet;
    profilePictureUrl;
    tweetUrl;
    constructor(tweet, profilePictureUrl, tweetUrl) {
        this.tweet = tweet;
        this.profilePictureUrl = profilePictureUrl;
        this.tweetUrl = tweetUrl;
    }
    renderTitle() {
        return `<h2>${this.tweet.substring(0, 50)}...<h2>`;
    }
    renderCaption() {
        return `<p>${this.tweet}</p>`;
    }
    renderThumbnail() {
        return `<img alt='${this.tweet.substring(0, 50)}...' src='${this.profilePictureUrl}'/>`;
    }
    renderLink() {
        return `<a href='${this.tweetUrl}'>${this.tweet.substring(0, 30)}...</a>`;
    }
}
//The client code
const content = [
    new PostContentType('New example available on RefactoringGuru', 'Bridge design pattern now has a real world example', 'http://img.sample.org/bridge.jpg', 'https://refactoring.guru/design-patterns/bridge'),
    new TweetContentType('Windows will support Linux executables natively on Windows 12', 'http://img.sample.org/profile.jpg', 'https://twitter.com/genbeta/387487346856/'),
    new VideoContentType('BRIDGE | Patrones de Diseño', 'En éste vídeo de la serie de PATRONES DE DISEÑO veremos el PATRÓN BRIDGE!', 'http://img.sample.org/bridge.jpg', 'https://www.youtube.com/watch?v=6bIHhzqMdgg'),
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
