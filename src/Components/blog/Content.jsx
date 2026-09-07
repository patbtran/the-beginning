function Content({ title, content, author }) {

    return (
        <div className='bg-sky-100'>
            <h1 className="text-3xl font-bold ">{title}</h1>
            <div className='justify-center text-center mt-4'>
            <p>{content}</p>
            <p>Author: {author}</p>
            </div>
        </div>
    );

}

export default Content;