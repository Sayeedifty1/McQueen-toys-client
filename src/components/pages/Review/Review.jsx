const FakeReviews = () => {
    return (
        <div className="mb-36">
            <h2 className="text-3xl font-bold text-center mb-10">Some Reviews</h2>
            <div className="reviews grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6 mx-auto ">
                <div className="review bg-gray-800 p-4 shadow rounded-lg">
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://i.ibb.co/JytzdGH/P3-OLGJ1-copy-1.png" alt="User Avatar" />
                        </div>
                    </div>
                    <div className="review-content">
                        <h3 className="review-title text-lg font-bold mb-2">Amazing Product</h3>
                        <p className="review-description text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum nisl eget mauris tincidunt lobortis.</p>

                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>

                        <div className="review-user text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 mr-2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            </svg>
                            John Doe
                        </div>
                    </div>
                </div>

                <div className="review bg-gray-800 p-4 shadow rounded-lg">
                    <div className="review-icon text-primary">
                        <div className="avatar offline">
                            <div className="w-14 rounded-full">
                                <img src="https://i.ibb.co/Jch6nZ7/chef-PNG115.png" alt="User Avatar" />
                            </div>
                        </div>
                    </div>
                    <div className="review-content">
                        <h3 className="review-title text-lg font-bold mb-2">Great Quality</h3>
                        <p className="review-description text-white mb-4">Nullam consectetur purus nec ligula pharetra ultrices. Nulla accumsan semper lectus, eu euismod risus facilisis id.</p>
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>
                        <div className="review-user text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 mr-2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            </svg>
                            Jane Smith
                        </div>
                    </div>
                </div>

                <div className="review bg-gray-800 p-4 shadow rounded-lg">
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://i.ibb.co/JytzdGH/P3-OLGJ1-copy-1.png" alt="User Avatar" />
                        </div>
                    </div>
                    <div className="review-content">
                        <h3 className="review-title text-lg font-bold mb-2">Awesome Customer Support</h3>
                        <p className="review-description text-white mb-4">Vestibulum eget accumsan justo, sed bibendum eros. Cras auctor neque ut elit efficitur, et commodo velit rutrum.</p>
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>
                        <div className="review-user text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 mr-2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            </svg>
                            Michael Johnson
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FakeReviews;
