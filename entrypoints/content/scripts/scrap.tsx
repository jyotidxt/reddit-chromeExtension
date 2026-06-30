export interface IPost {
    title: string;
    link: string;
    comments: string | null;
    tag: string | null;
    description: string | null;
    score: string | null;
    id: number;
}

export interface IComment {
    author: string;
    comments: string;
    link: string;
    permalink: string;
    id: number;
    score: string;
}

export function extractRedditPostsFromDOM() {
    const postElements = document.querySelectorAll("shreddit-post");
    const postData: IPost[] = [];

    postElements.forEach((postElement, key) => {
        const title = postElement.getAttribute("post-title")?.trim();
        const permalink = postElement.getAttribute("permalink");
        const fullLink = permalink ? `https://www.reddit.com${permalink}` : null;
        const commentCount = postElement.getAttribute("comment-count");
        const tagElement = postElement.querySelector("shreddit-post-flair a span div.flair-content");

        const tag = tagElement && tagElement.textContent ? tagElement.textContent.trim() : null;

        const descriptionElement = postElement.querySelector(
            'div[data-post-click-location="text-body"] > div'
        );
        const description = descriptionElement && descriptionElement.textContent ? descriptionElement.textContent.trim() : null;

        const scoreElement = postElement.getAttribute("score");
        const score = scoreElement ? scoreElement : null;

        if (title && fullLink) {
            postData.push({
                id: key,
                title: title,
                link: fullLink,
                comments: commentCount,
                tag: tag,
                description: description,
                score: score,
            });
        }
    });
    return postData;
}