import { ArticleCard } from "./article-card";


// const articlesData = [
//     {
//         // id: "1",
//         title: "The first article",
//         description: "This is the great great first article",
//         content: "First few words of the first article...",
//         postedBy: "Debanga",
//         postedOn: "01-02-24",
//         avatar: "https://github.com/shadcn.png",
//     },
//     {
//         // id:"2",
//         title: "The second article",
//         description: "This is the great great second article",
//         content: "First few words of the second article...",
//         postedBy: "Goutam",
//         postedOn: "02-02-24",
//         avatar: "https://github.com/shadcn.png",
//     },
//     {
//         // id: "3",
//         title: "The third article",
//         description: "This is the great great third article",
//         content: "First few words of the third article...",
//         postedBy: "Goswami",
//         postedOn: "03-02-24",
//         avatar: "https://github.com/shadcn.png",
//     },
//     {
//         // id: "4",
//         title: "The fourth article",
//         description: "This is the great great fourth article",
//         content: "First few words of the fourth article...",
//         postedBy: "Mithun",
//         postedOn: "04-02-24",
//         avatar: "https://github.com/shadcn.png",
//     },
// ]

interface ArticleCardsProps {
    articlesData: {
        id: string;
        title: string;
        description: string;
        content: string;
        postedBy: string;
        postedOn: string;
        avatar: string;
    }[];
}

const ArticleCards = ({
    articlesData
}: ArticleCardsProps) => {
    return (
        <div className="mx-auto w-[60%] px-24 py-16 mt-8 rounded-lg flex flex-col gap-5 bg-secondary">
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
