import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { QuizContext } from './Root';

const Home = () => {
    const quizes = useContext(QuizContext)

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1665584019~exp=1665584619~hmac=66ea0d1f58d709dc06b9f5e1a4af857b4ed7949e8d6f0081a0b2108ede80cb43" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Hi There! Welcome to our Site. Let's build the future of the web, together</h3>
                        <p className='text-2xl'>So, how can you improve your problem-solving and show employers you have this valuable skill? In this guide, we'll cover:</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {quizes.map(quiz => (<Cart key={quiz.id} quiz={quiz} />))}


                </div>
            </div>
        </section>
    );
};

export default Home;