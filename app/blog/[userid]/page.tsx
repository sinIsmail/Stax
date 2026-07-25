interface userIdPageProps {
    params: Promise<{ userid: string }>;
}

const userIdPage = async ({ params }: userIdPageProps) => {

    const { userid } = await params
 
    return (
        <div>
            <p>my post name {userid} :- </p>
        </div>
    );
}

export default userIdPage;