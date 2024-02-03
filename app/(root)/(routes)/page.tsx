import { firestoredb } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import ArticleCards from "@/components/article-cards";


const RootPage = async () => {
    interface Article {
        id: string;
        title: string;
        description: string;
        content: string;
        postedBy: string;
        postedOn: string;
        avatar: string;
    }

    const fetchedArticles = await getDocs(collection(firestoredb, "articles"))

    const articlesData: Article[] = [];

    fetchedArticles.forEach((article) => {
        articlesData.push({
            id: article.id,
            title: article.data().title || "",
            description: article.data().description || "",
            content: article.data().content || "",
            postedBy: article.data().postedBy || "",
            postedOn: article.data().postedOn || "",
            avatar: article.data().avatar || "",
        });
        return articlesData;
    });


    return (<div className="h-full p-4">
        <ArticleCards articlesData={articlesData}/>
    </div>);
}

export default RootPage;