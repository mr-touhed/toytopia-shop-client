
const BlogPage = () => {
    return (
        <div>
            
            <div className="p-6 rounded-lg m-6 bg-base-200">
                    <h2 className="text-xl font-medium">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className="py-4">Access and ID tokens are JSON web tokens that are valid for a specific number of seconds. Typically, a user needs a new access token when they attempt to access a resource for the first time or after the previous access token that was granted to them expires.</p>
                    <p className="py-4">A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. You request a refresh token alongside the access and/or ID tokens as part of a user`s initial authentication and authorization flow. Applications must then securely store refresh tokens since they allow users to remain authenticated.</p>

                    <li>How do they work and where should we store them on the client-side?</li>
                    <p>Access tokens are often stored in memory or in a client-side storage mechanism such as browser sessionStorage or memory variables. and Refresh Token recommended to store refresh tokens in a secure HTTP-only cookie or another secure storage mechanism provided by the platform, such as browser localStorage or secure storage </p>

            </div>
            <div className="p-6 rounded-lg m-6 bg-base-200">
                    <h2 className="text-xl font-medium">Compare SQL and NoSQL databases?</h2>
                    <p className="py-4">SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>

            </div>
            <div className="p-6 rounded-lg m-6 bg-base-200">
                    <h2 className="text-xl font-medium">What is express js? What is Nest JS?</h2>
                    <p className="py-4">Express.js is a popular web application framework for Node.js that provides a minimalist and flexible set of features for handling HTTP requests and responses. </p>
                    <p className="py-4">Nest.js, on the other hand, is a TypeScript-based framework built on top of Express.js. It brings additional structure and scalability to applications by leveraging TypeScript's features and providing a modular and maintainable codebase.</p>

            </div>
            <div className="p-6 rounded-lg m-6 bg-base-200">
                    <h2 className="text-xl font-medium">What is MongoDB aggregate and how does it work ?</h2>
                    <p className="py-4">MongoDB Aggregation is a feature that allows you to perform advanced data processing operations on MongoDB databases. It works through a concept called the aggregation pipeline, which consists of stages that process input documents and produce output documents. Each stage performs a specific operation, such as filtering, grouping, sorting, or calculating aggregations.</p>

            </div>
            
        </div>
    );
};

export default BlogPage;