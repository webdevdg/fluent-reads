import { Navbar } from "@/components/Navbar";



const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="pt-16 h-full">
                {children}</main>
        </div>
    );
}

export default RootLayout;