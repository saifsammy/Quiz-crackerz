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
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Hi There! Welcome to our Site</h3>
                        <p className='text-2xl'>If you wanna be a dev. Than you choose the right path.</p>
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

