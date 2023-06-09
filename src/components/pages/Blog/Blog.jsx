import useTitle from "../../../hooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className=" mx-auto py-8 w-5/6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="text-yellow-200 shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                        <p className="text-white">
                            <span className="font-bold underline">Access Token:</span>
                            An access token is a credential that is used to access protected resources or perform actions on behalf of a user in a system. It is typically a string of characters generated by an authentication server after a user successfully authenticates and authorizes their access. The access token is included in API requests to prove the users identity and permissions. It acts as a bearer token, meaning it can be presented by the client without additional proof of identity. <br />
                            <span className="font-bold underline">Refresh Token: </span>
                            A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It is also generated by the authentication server during the authentication process. Unlike access tokens, refresh tokens are not sent with every API request but are securely stored by the client application, typically in a cookie or local storage.
                            <br />
                            <br />
                            Access tokens are short-lived tokens that are used to authenticate and authorize API requests. They are typically included in the headers of API requests and provide access to protected resources.

                            Refresh tokens are long-lived tokens that are used to obtain new access tokens when the original access token expires. They are securely stored on the client-side and exchanged for a new access token when needed.

                            On the client-side, access tokens and refresh tokens can be stored in secure storage mechanisms such as HTTP-only secure cookies, local storage, or platform-specific secure storage options. The choice depends on security requirements and platform limitations.
                        </p>
                    </div>
                    <div className="text-yellow-200 shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Compare SQL and NoSQL databases?</h3>
                        <p className="text-white">

                            SQL and NoSQL databases differ in their data models, schemas, querying languages, and scalability.

                            SQL databases, also known as relational databases, use a structured data model with predefined schemas. They organize data into tables with rows and columns, enforcing relationships and constraints. SQL is used for querying data using structured query language (SQL) statements. SQL databases are ideal for complex relationships and transactions. They provide ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity.

                            On the other hand, NoSQL databases employ various data models, including key-value, document, columnar, and graph. They have flexible schemas, allowing for dynamic and evolving data structures. NoSQL databases often use non-SQL query languages or APIs tailored to their data model. They are designed for scalability, particularly horizontal scalability, allowing them to handle large amounts of data and high traffic loads.

                            SQL databases excel in consistency, data integrity, and complex querying, making them suitable for applications with structured data and strict relationships. NoSQL databases offer greater flexibility, scalability, and faster performance for applications with rapidly changing data, unstructured or semi-structured data, and high scalability requirements. The choice between SQL and NoSQL depends on the specific needs and characteristics of the application.
                        </p>
                    </div>
                    <div className="text-yellow-200 shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">What is express js? What is Nest JS?</h3>
                        <p className="text-white">
                            <span className="font-bold">Express js</span> is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web servers and APIs. Express.js offers a set of robust features and middleware that allow developers to handle HTTP requests, define routes, manage sessions, and handle various other functionalities required for web development.
                            <br />

                            <span className="font-bold">Next js</span> is a popular React framework for building server-side rendered (SSR) and static websites. It is built on top of React and provides additional features and optimizations for creating fast, scalable, and SEO-friendly web applications.
                        </p>
                    </div>
                    <div className="text-yellow-200 shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">What is MongoDB aggregate and how does it work?</h3>
                        <p className="text-white">
                            Aggregation framework is a powerful feature that allows for advanced data processing and analysis within the database. It provides a way to perform complex queries, transformations, and computations on the data stored in MongoDB.

                            The aggregation pipeline in MongoDB consists of multiple stages, where each stage performs a specific operation on the input documents and passes the result to the next stage. The stages can include operations like filtering, grouping, projecting, sorting, joining, and more. These stages are processed sequentially, allowing for the transformation of the data as it flows through the pipeline.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;