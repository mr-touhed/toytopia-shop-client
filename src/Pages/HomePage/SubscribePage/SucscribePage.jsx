
const SucscribePage = () => {
    return (
        <div className="mt-6 h-80 bg-red-300 flex md:justify-between items-center md:px-20 flex-col md:flex-row py-16">
                <div>
                    <h2 className="text-3xl mb-2">Subscribe to our Newsletter</h2>
                    <p>Be the first to know about new products, sales and promotions.</p>
                </div>
                <div>
                    <input type="email" className="md:w-[600px] h-11 rounded-l-lg mr-6 md:mr-0"/>
                    <button className="btn glass ">Subscribe</button>
                </div>
        </div>
    );
};

export default SucscribePage;