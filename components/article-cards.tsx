import { ArticleCard } from "./article-card";


const articlesData = [
    {
        title: "The first article",
        description: "This is the great great first article",
        content: "First few words of the first article...",
        postedBy: "Debanga",
        postedOn: "01-02-24",
        avatar: "https://github.com/shadcn.png",
    },
    {
        title: "The second article",
        description: "This is the great great second article",
        content: "First few words of the second article...",
        postedBy: "Goutam",
        postedOn: "02-02-24",
        avatar: "https://github.com/shadcn.png",
    },
    {
        title: "The third article",
        description: "This is the great great third article",
        content: "First few words of the third article...",
        postedBy: "Goswami",
        postedOn: "03-02-24",
        avatar: "https://github.com/shadcn.png",
    },
    {
        title: "The fourth article",
        description: "This is the great great fourth article",
        content: "First few words of the fourth article...",
        postedBy: "Mithun",
        postedOn: "04-02-24",
        avatar: "https://github.com/shadcn.png",
    },
]

const ArticleCards = () => {
    return (
        <div className="px-2 py-10 grid grid-cols-1 sm:grid-cols-1 
        md:grid-cols-2 lg:gird-cols-2 xl:grid-cols-2 gap-3">
            {articlesData.map((article, index) => (

                <ArticleCard
                    key={index}
                    {...article}
                />
            ))}
        </div>
    );
}

export default ArticleCards;
